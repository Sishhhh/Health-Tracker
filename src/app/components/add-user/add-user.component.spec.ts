import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { AddUserComponent } from './add-user.component';
import { WorkoutService } from './../../services/workout.service';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let mockWorkoutService: jasmine.SpyObj<WorkoutService>;

  beforeEach(async () => {
    mockWorkoutService = jasmine.createSpyObj('WorkoutService', ['addWorkout']);

    await TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      providers: [
        FormBuilder,
        { provide: WorkoutService, useValue: mockWorkoutService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with default values', () => {
    expect(component.workoutForm).toBeDefined();
    expect(component.workoutTypes).toEqual(['Running', 'Swimming', 'Cycling', 'Yoga']);
  });

  it('should have a valid form when fields are filled correctly', () => {
    component.workoutForm.setValue({
      userName: 'JohnDoe',
      workoutMinutes: 45,
      workoutType: 'Running'
    });
    expect(component.workoutForm.valid).toBeTrue();
  });

  it('should call WorkoutService.addWorkout on form submit', () => {
    component.workoutForm.setValue({
      userName: 'JohnDoe',
      workoutMinutes: 45,
      workoutType: 'Running'
    });
    component.onSubmit();
    expect(mockWorkoutService.addWorkout).toHaveBeenCalledWith('JohnDoe', 'Running', 45);
  });

  it('should reset form on successful submit', () => {
    component.workoutForm.setValue({
      userName: 'JohnDoe',
      workoutMinutes: 45,
      workoutType: 'Running'
    });
    component.onSubmit();
    expect(component.workoutForm.value).toEqual({
      userName: '',
      workoutMinutes: null,
      workoutType: 'Running'
    });
  });
});
