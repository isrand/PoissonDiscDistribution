import { Point2 } from './lib/Point2';

// Initial point
// Try k times to create a point inside the annulus of initial point:
// Point that's also at a minimum distance R of EVERY other point in the point array.
// K == 0:
  // Deactivate current point
// K != 0:
  // Add newly generated point to list of actives

export function PoissonDiscDistribution(areaWidth: number,
                                        areaHeight: number,
                                        radius: number,
                                        attempts: number): Point2[] {
  const finalPoints: Point2[] = [];

  return finalPoints;
}
