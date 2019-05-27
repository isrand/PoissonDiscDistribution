import { Point2 } from '../../src/geometry/Point2';
import { Area2 } from '../../src/geometry/Area2';

test('Instantiation of a new point is correct', () => {
  const point: Point2 = new Point2(2, 4);

  // Point is instantiated correctly.
  expect(point).toBeInstanceOf(Point2);
});

test('Distance between two points is correct', () => {
  const pointA: Point2 = new Point2(0, 0);
  const pointB: Point2 = new Point2(4, 4);

  // Expected result is correct.
  expect(pointA.distance(pointB)).toBe(Math.sqrt(32));
});

describe('New random point inside of an annulus ', () => {
  const pointA: Point2 = new Point2(0, 0);
  const minRadius: number = 2;
  const maxRadius: number = 4;
  const pointInsideAnnulus: Point2 = pointA.generateRandomPointInsideAnnulus(minRadius, maxRadius);

  test('is instantiated correctly', () => {
    expect(pointInsideAnnulus).toBeInstanceOf(Point2);
  });

  test('is confirmed to be inside of the annulus', () => {
    expect(pointInsideAnnulus.isInsideAnnulus(pointA, minRadius, maxRadius)).toBeTruthy();
  });
});

test('A point is contained inside of an area', () => {

  let testPasses: boolean = true;
  const area: Area2 = new Area2(40, 40, 10, 10);

  for (let i: number = 0; i < 50; i += 1) {

    const pointInsideArea: Point2 = area.generateRandomPoint2();
    testPasses = (pointInsideArea.isInsideArea(area)) ? true : false;
    if (!testPasses) break;

  }

  expect(testPasses).toEqual(true);
});
