
import { User } from '../Interfaces/user.interface';

export const Allusers: User[] = [
  {
    userName: 'John Doe',
    workout: [
      { type: 'Running', time: 45 },
      { type: 'Cycling', time: 60 }
    ],
    totalTime: 105
  },
  {
    userName: 'Jane Smith',
    workout: [
      { type: 'Swimming', time: 50 },
      { type: 'Yoga', time: 30 }
    ],
    totalTime: 80
  },
  {
    userName: 'Mike Johnson',
    workout: [
      { type: 'Running', time: 30 },
      { type: 'Swimming', time: 40 }
    ],
    totalTime: 70
  },
  {
    userName: 'Emily Brown',
    workout: [
      { type: 'Cycling', time: 90 },
      { type: 'Yoga', time: 60 }
    ],
    totalTime: 150
  }
];
