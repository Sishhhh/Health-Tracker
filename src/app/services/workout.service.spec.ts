import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';
import { Allusers } from '../UserData/allUsers';
import { User } from '../Interfaces/user.interface';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
  });

  beforeEach(() => {
    // Reset Allusers before each test to avoid test pollution
    Allusers.length = 0;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add workout to existing user and update time', () => {
    const existingUser: User = {
      userName: 'JohnDoe',
      workout: [{ type: 'Running', time: 30 }],
      totalTime: 30
    };
    Allusers.push(existingUser);

    service.addWorkout('JohnDoe', 'Running', 20);

    const updatedUser = Allusers.find(u => u.userName === 'JohnDoe');
    expect(updatedUser).toBeTruthy();
    expect(updatedUser!.workout.find(w => w.type === 'Running')!.time).toBe(50);
    expect(updatedUser!.totalTime).toBe(50);
  });

  it('should add workout to new user and create a new entry', () => {
    service.addWorkout('JaneDoe', 'Swimming', 45);

    const newUser = Allusers.find(u => u.userName === 'JaneDoe');
    expect(newUser).toBeTruthy();
    expect(newUser!.workout.find(w => w.type === 'Swimming')!.time).toBe(45);
    expect(newUser!.totalTime).toBe(45);
  });

  it('should handle multiple workouts for the same user', () => {
    const user: User = {
      userName: 'JohnDoe',
      workout: [{ type: 'Running', time: 30 }],
      totalTime: 30
    };
    Allusers.push(user);

    service.addWorkout('JohnDoe', 'Running', 20);
    service.addWorkout('JohnDoe', 'Cycling', 40);

    const updatedUser = Allusers.find(u => u.userName === 'JohnDoe');
    expect(updatedUser).toBeTruthy();
    expect(updatedUser!.workout.find(w => w.type === 'Running')!.time).toBe(50);
    expect(updatedUser!.workout.find(w => w.type === 'Cycling')!.time).toBe(40);
    expect(updatedUser!.totalTime).toBe(90);
  });
});
