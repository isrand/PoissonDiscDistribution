import { PoissonDiscDistribution } from './poissonDiscDistribution/PoissonDiscDistribution';
import { Area2 } from './geometry/Area2';

const args = process.argv.slice(2);
if (args.length !== 6) {
  console.log('Incorrect parameters input. Exiting...');
  process.exit(1);
}

const areaWidth = Number(args[0]);
const areaHeight = Number(args[1]);
const areaCenterX = Number(args[2]);
const areaCenterY = Number(args[3]);

const k = Number(args[4]);
const radius = Number(args[5]);

const area: Area2 = new Area2(areaWidth, areaHeight, areaCenterX, areaCenterY);
const distribution = PoissonDiscDistribution.generateDistribution(area, k, radius);

for (const sample of distribution) {
  console.log(`${Math.round(sample.x)},${Math.round(sample.y)}`);
}
