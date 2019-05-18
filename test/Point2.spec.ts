import { Point2 } from '../lib/Point2';

test('Instantiation of a new Point2 is valid', () => {
  const point: Point2 = new Point2(2, 4);
  expect(point).toBeInstanceOf(Point2);
});

test('Distance between two points is correct', () => {
  const pointA: Point2 = new Point2(0, 0);
  const pointB: Point2 = new Point2(4, 4);
  expect(pointA.Distance(pointB)).toBe(Math.sqrt(32));
});

test('Creation of a new point inside annulus returns a new point', () => {
  const pointA: Point2 = new Point2(0, 0);
  const pointInsideAnnulus: Point2 = pointA.RandomPointInsideAnnulus(2, 4);
  expect(pointInsideAnnulus).toBeInstanceOf(Point2);
});
