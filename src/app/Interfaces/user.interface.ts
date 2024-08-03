export interface Workout {
  type: string;
  time: number;
}

export interface User {
  userName: string;
  workout: Workout[];
  totalTime: number;
}
