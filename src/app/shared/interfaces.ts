export interface Worker {
  name: string;
  id: number;
}

export interface Flight {
  num: string;
  from_destination: string;
  to_destination: string;
  from_date: string;
  to_date: string;
  plane: string;
  duration: number;
  from_gate: number;
  to_gate: number;
}

