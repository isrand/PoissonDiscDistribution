import { PoissonDiscDistribution } from '../../src/poissonDiscDistribution/PoissonDiscDistribution';
import { Area2 } from '../../src/geometry/Area2';

describe('Poisson Disc Distribution', () => {
  test('works as expected', () => {
    const area: Area2 = new Area2(400, 400, 0, 0);

    PoissonDiscDistribution.generateDistribution(area, 30, 5);
  });
});
