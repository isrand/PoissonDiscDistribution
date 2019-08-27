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
  
});
