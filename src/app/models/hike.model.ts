import { DistanceModel } from "./distance.model";

export interface ChallengeModel{
  name: string;
  from: string;
  date: string;
  image: string;
  info: string [];
  distances: DistanceModel[];
}
