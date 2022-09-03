import { v4 as uuidv4 } from 'uuid';

export const findings = [
  {
    id: uuidv4(),
    type: "absolute",
    x: 10,
    y: 20,
    label: "Finding 1",
    note: "Lorem ipsum dolor sit amet",
  },
  {
    id: uuidv4(),
    type: "absolute",
    x: 45,
    y: 20,
    label: "Finding 2",
    note: "Duis aute irure dolor in reprehenderit",
  },
  { 
    id: uuidv4(),
    type: "absolute",
    x: 200,
    y: 100,
    label: "Finding 3",
  },
  {
    id: uuidv4(),
    type: "absolute",
    x: 55,
    y: 30,
    label: "Finding 4",
    note: "Excepteur sint occaecat cupidatat non proident",
  },
  {
    id: uuidv4(),
    type: "radial",
    hours: 3,
    minutes: 30,
    distanceFromCenter: 100,
    label: "Radial 1",
    note: "Lorem ipsum dolor sit amet",
  },
  {
    id: uuidv4(),
    type: "radial",
    hours: 7,
    minutes: 0,
    distanceFromCenter: 40,
    label: "Radial 2",
  },
  {
    id: uuidv4(),
    type: "absolute",
    x: 450,
    y: 450,
    label: "Finding 5",
    note: "Culpa qui officia deserunt mollit anim id est laborum",
  },
  { 
    id: uuidv4(),
    type: "absolute",
    x: 300, 
    y: 400, 
    label: "Finding 6",
  }
];