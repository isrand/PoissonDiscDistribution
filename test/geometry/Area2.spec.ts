import { Area2 } from '../../src/geometry/Area2';
import { Point2 } from '../../src/geometry/Point2';

test('Instantiation of an area is correct', () => {
  const area: Area2 = new Area2(400, 400, 0, 0);

  expect(area).toBeInstanceOf(Area2);
});

test('Creation of a random point inside an area is correct', () => {
  const area: Area2 = new Area2(400, 400, 0, 0);

  const pointInsideArea: Point2 = area.generateRandomPoint2();
  // Point is instantiated correctly.
  expect(pointInsideArea.isInsideArea(area)).toEqual(true);
});
