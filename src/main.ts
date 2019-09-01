import { PoissonDiscDistribution } from './poissonDiscDistribution/PoissonDiscDistribution';
import { Area2 } from './2D/Area2';
import { Area3 } from './3D/Area3';
import { Point3 } from './3D/Point3';

const area: Area3 = new Area3(100, 100, 100, 0, 0, 0);
const distribution = PoissonDiscDistribution.generateDistribution(area, 3, 5);

for (const sample of distribution) {
  const s = sample as Point3;
  console.log(`${Math.round(s.x)}, ${Math.round(s.y)}, ${Math.round(s.z)}`);
}
