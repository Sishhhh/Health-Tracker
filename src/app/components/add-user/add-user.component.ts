import { WorkoutService } from './../../services/workout.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit {
  workoutForm: FormGroup;
  workoutTypes: string[] = ['Running', 'Swimming', 'Cycling', 'Yoga'];

  constructor(private fb: FormBuilder, private WorkoutService: WorkoutService) {
    this.workoutForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      workoutMinutes: [null, [Validators.required, Validators.min(30), Validators.pattern(/^[1-9]\d*$/)]],
      workoutType: [this.workoutTypes[0], Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.workoutForm.valid) {
      const { userName, workoutMinutes, workoutType } = this.workoutForm.value;
      this.WorkoutService.addWorkout(userName, workoutType, workoutMinutes);
      console.log('User added/updated:', this.workoutForm.value);
      this.workoutForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

}
