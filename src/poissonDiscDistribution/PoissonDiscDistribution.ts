import { Point2 } from '../geometry/Point2';
import { Area2 } from '../geometry/Area2';
import { randomRange } from '../math/RandomRange';

/**Poisson Disc Distribution class */
export class PoissonDiscDistribution {

  public static generateDistribution(area: Area2, k: number, radius: number): Point2[] {

    const firstPoint = area.generateRandomPoint2();

    const activeSamples: Point2[] = [firstPoint];
    const finalSamples: Point2[] = [firstPoint];
    let i: number;

    while (activeSamples.length > 0) {
      i = 0;
      const sample: Point2 = activeSamples.shift() as Point2;
      while (i < k) {
        const newSample: Point2 = sample.generateRandomPointInsideAnnulus(radius, radius * 2);
        if (newSample.isInsideArea(area)) {
          const allDistances = this.calculateDistances(newSample, finalSamples, radius);
          if (allDistances === finalSamples.length) {
            activeSamples.unshift(newSample);
            activeSamples.unshift(sample);
            finalSamples.push(newSample);
            break;
          } else {
            i += 1;
          }
        }
      }
    }

    return finalSamples;
  }

  private static calculateDistances(sample: Point2, allSamples: Point2[], radius: number): number {
    let sum = 0;
    for (const s of allSamples) {
      if (sample.distance(s) >= radius) {
        sum += 1;
      }
    }
    return sum;
  }
}
