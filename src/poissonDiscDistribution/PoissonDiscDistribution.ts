import { Point2 } from '../geometry/Point2';
import { Area2 } from '../geometry/Area2';
import { randomRange } from '../math/RandomRange';

/**Poisson Disc Distribution class */
export class PoissonDiscDistribution {

  public static generateDistribution(area: Area2, k: number, radius: number): Point2[] {

    const activeSamples: Point2[] = [area.generateRandomPoint2()];
    const finalSamples: Point2[] = [activeSamples[0]];

    while (activeSamples.length > 0) {
      const randomIndex: number = randomRange(activeSamples.length);
      const randomSample: Point2 = activeSamples[randomIndex];
      let tentativeValidSample: boolean = true;
      let i: number = 0;
      while (i < k) {
        const randomSampleInsideAnnulus: Point2 = randomSample.generateRandomPointInsideAnnulus(radius, radius * 2);
        for (const sample of finalSamples) {
          if (randomSampleInsideAnnulus.distance(sample) < radius) {
            tentativeValidSample = false;
            break;
          }
        }
        if (tentativeValidSample) {
          if (randomSampleInsideAnnulus.isInsideArea(area)) {
            finalSamples.push(randomSampleInsideAnnulus);
            activeSamples.push(randomSampleInsideAnnulus);
            break;
          } else {
            break;
          }
        } else {
          i += 1;
        }
      }
      if (i === k) activeSamples.splice(randomIndex, 1);
    }

    return finalSamples;
  }
}
