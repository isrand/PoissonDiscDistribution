import { PoissonDiscDistribution } from '../../src/poissonDiscDistribution/PoissonDiscDistribution';
import { Area2 } from '../../src/2D/Area2';
import { Area3 } from '../../src/3D/Area3';

describe('PoissonDiscDistribution', () => {

  const area: Area2 = new Area2(100, 100, 0, 0);

  const k: number = 10;
  const radius: number = 5;

  const distribution = PoissonDiscDistribution.generateDistribution(area, k, radius);
  
  test('should create a distribution correctly', () => {
    expect(distribution.length).toBeGreaterThan(0);
  });
  
  test('should create a distribution in which all points are at least (radius) units away from each other', () => {
    for (let i = 0; i < distribution.length; i++) {
      for (let j = i + 1; j < distribution.length; j++) {
         expect(distribution[i].distance(distribution[j])).toBeGreaterThanOrEqual(radius);
      }
    }
  });

  test('should create a distribution in which all points are contained in the defined area', () => {
    for (let sample of distribution) {
      expect(sample.isInsideArea(area)).toEqual(true);
    }
  });

});
