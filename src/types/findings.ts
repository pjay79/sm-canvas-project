type Absolute = {
  x: number;
  y: number;
};

type Radial = {
  hours: number;
  minutes: number;
  distanceFromCenter: number;
};

export type FindingsData = (Absolute | Radial) & {
  id: string;
  type: string;
  label: string;
  note?: string;
};
