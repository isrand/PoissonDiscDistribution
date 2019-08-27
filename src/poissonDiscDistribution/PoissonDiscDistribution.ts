import { IPoint } from '../interfaces/IPoint';
import { IArea } from '../interfaces/IArea';
import { randomRange } from '../utils/RandomRange';

/**Poisson Disc Distribution class */
export class PoissonDiscDistribution {

  public static generateDistribution(area: IArea, k: number, radius: number): IPoint[] {

    const firstPoint = area.generateRandomPoint();

    const activeSamples: IPoint[] = [firstPoint];
    const finalSamples: IPoint[] = [firstPoint];
    let i: number;

    while (activeSamples.length > 0) {
      i = 0;
      const sample: IPoint = activeSamples.shift() as IPoint;
      while (i < k) {
        const newSample: IPoint = sample.generateRandomPoint(radius, radius * 2);
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

  private static calculateDistances(sample: IPoint, allSamples: IPoint[], radius: number): number {
    let sum = 0;
    for (const s of allSamples) {
      if (sample.distance(s) >= radius) {
        sum += 1;
      }
    }
    return sum;
  }
}
