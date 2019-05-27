import { Point2 } from '../geometry/Point2';
import { Area2 } from '../geometry/Area2';
import { randomRange } from '../math/RandomRange';

export class PoissonDiscDistribution {

  public area: Area2;
  public k: number;
  public radius: number;

  public activeSamples: Point2[];
  public finalSamples: Point2[];

  public constructor(area: Area2, k: number, radius: number) {
    this.area = area;
    this.k = k;
    this.radius = radius;
    this.activeSamples = [area.generateRandomPoint2()];
    this.finalSamples = [this.activeSamples[0]];
  }

  public generateDistribution(): Point2[] {

    while (this.activeSamples.length > 0) {
      const randomIndex: number = randomRange(this.activeSamples.length);
      const randomSample: Point2 = this.activeSamples[randomIndex];
      let tentativeValidSample: boolean = true;
      let i: number = 0;
      while (i < this.k) {
        const randomSampleInsideAnnulus: Point2 = randomSample.generateRandomPointInsideAnnulus(this.radius, this.radius * 2);
        for (const sample of this.finalSamples) {
          if (randomSampleInsideAnnulus.distance(sample) < this.radius) {
            tentativeValidSample = false;
            break;
          }
        }
        if (tentativeValidSample) {
          if (randomSampleInsideAnnulus.isInsideArea(this.area)) {
            this.finalSamples.push(randomSampleInsideAnnulus);
            this.activeSamples.push(randomSampleInsideAnnulus);
            break;
          } else {
            console.log(randomSampleInsideAnnulus);
            break;
          }
        } else {
          i += 1;
        }
      }
      if (i === this.k) this.activeSamples.splice(randomIndex, 1);
    }

    console.log(this.finalSamples);
    return this.finalSamples;
  }
}
