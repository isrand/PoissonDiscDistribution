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

test('Creation of a new point inside annulus returns a valid new point', () => {
  const pointA: Point2 = new Point2(0, 0);
  const pointInsideAnnulus: Point2 = pointA.GenerateRandomPointInsideAnnulus(2, 4);

  // Point is instantiated correctly.
  expect(pointInsideAnnulus).toBeInstanceOf(Point2);

  // Point is inside annulus (outside inner circle, inside outer circle).
  expect(Point2.IsPointInsideCircle(pointInsideAnnulus, pointA, 2)).toEqual(false);
  expect(Point2.IsPointInsideCircle(pointInsideAnnulus, pointA, 4)).toEqual(true);
});
