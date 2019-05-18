import { Vector2 } from '../../lib/Vector2';

test('Instantiation of a new vector is correct', () => {
  const vector: Vector2 = new Vector2(2, 4);

  // Point is instantiated correctly.
  expect(vector).toBeInstanceOf(Vector2);
});

test('Vector magnitude is calculated correctly', () => {
  const vector: Vector2 = new Vector2(2, 4);

  // Vector magnitude is expected
  expect(vector.magnitude).toEqual(Math.sqrt(20));
});

test('Unit vector is calculated correctly', () => {
  const vector: Vector2 = new Vector2(1, 1);
  const vectorMagnitude: number = vector.magnitude;
  const expectedUnitVector: Vector2 = new Vector2(vector.x / vectorMagnitude, vector.y / vectorMagnitude);

  expect(vector.UnitVector()).toEqual(expectedUnitVector);

});
