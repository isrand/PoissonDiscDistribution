import { Vector2 } from '../../src/2D/Vector2';

describe('Vector2', () => {

  test('should instantiate correctly', () => {
    const vector: Vector2 = new Vector2(2, 4);
  
    expect(vector).toBeInstanceOf(Vector2);
  });
  
  test('should calculate the magnitude correctly', () => {
    const vector: Vector2 = new Vector2(2, 4);
  
    expect(vector.magnitude).toEqual(Math.sqrt(20));
  });
  
  test('should calculate the unit vector correctly', () => {
    const vector: Vector2 = new Vector2(1, 1);
    const vectorMagnitude: number = vector.magnitude;
    const expectedUnitVector: Vector2 = new Vector2(vector.x / vectorMagnitude, vector.y / vectorMagnitude);
  
    expect(vector.unitVector()).toEqual(expectedUnitVector);
  
  });
  
});
