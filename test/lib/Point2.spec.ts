import { Point2 } from '../../lib/Point2';

test('Instantiation of a new point is correct', () => {
  const point: Point2 = new Point2(2, 4);

  // Point is instantiated correctly.
  expect(point).toBeInstanceOf(Point2);
});

test('Distance between two points is correct', () => {
  const pointA: Point2 = new Point2(0, 0);
  const pointB: Point2 = new Point2(4, 4);

  // Expected result is correct.
  expect(pointA.Distance(pointB)).toBe(Math.sqrt(32));
});

describe('New random point inside of an annulus ', () => {
  const pointA: Point2 = new Point2(0, 0);
  const minRadius: number = 2;
  const maxRadius: number = 4;
  const pointInsideAnnulus: Point2 = pointA.GenerateRandomPointInsideAnnulus(minRadius, maxRadius);

  test('is instantiated correctly', () => {
    expect(pointInsideAnnulus).toBeInstanceOf(Point2);
  });

  test('is confirmed to be inside of the annulus', () => {
    expect(Point2.IsPointInsideAnnulus(pointInsideAnnulus, pointA, minRadius, maxRadius)).toBeTruthy();
  });
});
