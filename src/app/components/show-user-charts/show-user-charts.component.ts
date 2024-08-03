import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../../Interfaces/user.interface';
import { Chart, registerables } from 'chart.js';
import { WorkoutService } from '../../services/workout.service';

Chart.register(...registerables);

@Component({
  selector: 'app-show-user-charts',
  templateUrl: './show-user-charts.component.html',
  styleUrls: ['./show-user-charts.component.scss']
})
export class ShowUserChartsComponent implements OnInit {
  users: User[] = [];
  workoutChart: Chart | undefined;
  selectedlabel :any;
  selectedData: any;
  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.users = this.workoutService.getUsers();
    this.showUserChart(this.users[0])
  }

  showUserChart(user:any){
    this.selectedlabel = user.workout.map((w:any) => w.type);
    this.selectedData = user.workout.map((w:any) => w.time);
    this.createChart(this.selectedlabel, this.selectedData,'bar', 'userChart' , `Workout Chart of ${user.userName}`);
  }


  onUserSelect(user:any){
    this.showUserChart(user)
  }

  createChart(label: any[], labelData: any[], type: any, id: any, labelName: string) {
    const ctx = document.getElementById(id) as HTMLCanvasElement | null;

    if (ctx) {
      // Destroy the existing chart instance if it exists
      if (id === 'userChart' && this.workoutChart) {
        this.workoutChart.destroy();
      }

      const chart = new Chart(ctx, {
        type: type,
        data: {
          labels: label,
          datasets: [{
            label: labelName,
            data: labelData,
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
              // You can add more colors here if needed
            ],
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'x',
          scales: {
            x: {
              beginAtZero: true, 
              reverse: false    
            },
            y: {
              beginAtZero: true, 
              reverse: false    
            }
          }
        }
      });
      if (id === 'userChart') {
        this.workoutChart = chart;
      }
    } else {
      console.error(`Failed to find the canvas element with the ID "${id}"`);
    }
}


}
