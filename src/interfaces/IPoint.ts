import { IArea } from './IArea';

export interface IPoint {
  x: number;
  y: number;
  distance(point: IPoint): number;
  isInsideArea(area: IArea): boolean;
  generateRandomPoint(minRadius: number, maxRadius: number): IPoint;
}
