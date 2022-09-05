export type Findings = {
  id: string;
  type: string;
  label: string;
  note?: string;
  x?: number | undefined;
  y?: number | undefined;
  hours?: number | undefined;
  minutes?: number | undefined;
  distanceFromCenter?: number | undefined;
};
