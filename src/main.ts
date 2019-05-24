import { Point2 } from './lib/Point2';
import { Area2 } from './lib/Area2';

export class PoissonDiscDistribution {

  public area: Area2;
  public k: number;

  public activeSamples: Point2[];

  public constructor(area: Area2, k: number) {
    this.area = area;
    this.k = k;
    this.activeSamples = [area.GenerateRandomPoint2()];
  }

  public PoissonDiscDistribution(): Point2[] {

    return [];
  }
}
