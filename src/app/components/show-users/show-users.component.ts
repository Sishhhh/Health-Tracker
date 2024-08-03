import { WorkoutService } from './../../services/workout.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../Interfaces/user.interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['userName', 'workouts', 'totalWorkoutTypes', 'totalTime'];
  dataSource = new MatTableDataSource<User>();

  workoutTypes: string[] = ['All', 'Running', 'Swimming', 'Cycling', 'Yoga'];
  selectedWorkoutType: string = 'All';
  searchValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.dataSource.data = this.workoutService.getUsers();
    this.dataSource.filterPredicate = (data: User, filter: string) => {
      const filterObject = JSON.parse(filter);
      const matchesSearch = data.userName.toLowerCase().includes(filterObject.search);
      const matchesWorkoutType = filterObject.workoutType === 'All' || data.workout.some(w => w.type === filterObject.workoutType);
      return matchesSearch && matchesWorkoutType;
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(): void {
    console.log(this.searchValue)
    console.log(this.selectedWorkoutType);
    const filterObject = {
      search: this.searchValue.trim().toLowerCase(),
      workoutType: this.selectedWorkoutType
    };
    this.dataSource.filter = JSON.stringify(filterObject);
  }

  onWorkoutTypeChange(event: any): void {
    this.selectedWorkoutType = event.target.value;
    this.applyFilter();
  }
}
