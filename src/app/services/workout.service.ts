import { Injectable } from '@angular/core';
import { Allusers } from '../UserData/allUsers';
import { User } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { }

  addWorkout(userName: string, workoutType: string, workoutMinutes: number): void {
    let user = Allusers.find(u => u.userName.trim().toLowerCase() === userName.trim().toLowerCase());

    if (user) {
      let workout = user.workout.find(w => w.type === workoutType);

      if (workout) {
        workout.time += workoutMinutes;
      } else {
        user.workout.push({ type: workoutType, time: workoutMinutes });
      }

      user.totalTime = user.workout.reduce((total, w) => total + w.time, 0);
    } else {
      const newUser: User = {
        userName: userName,
        workout: [{ type: workoutType, time: workoutMinutes }],
        totalTime: workoutMinutes
      };
      Allusers.push(newUser);
    }
  }

  getUsers(): User[] {
    return Allusers;
  }
}
