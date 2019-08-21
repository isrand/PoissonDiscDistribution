import { PoissonDiscDistribution } from './poissonDiscDistribution/PoissonDiscDistribution';
import { Area2 } from './geometry/Area2';

const area: Area2 = new Area2(100, 100, 0, 0);
const distribution = PoissonDiscDistribution.generateDistribution(area, 30, 5);

for (const sample of distribution) {
  console.log(`(${Math.floor(sample.x)}, ${Math.floor(sample.y)})`);
}
