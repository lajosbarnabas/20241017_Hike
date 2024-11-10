export interface DistanceModel {
  name: string;
  distance: number;
  fee: number;
  level: number;
  maxtime: number;
  applied?: boolean;
}