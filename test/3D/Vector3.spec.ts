import { Vector3 } from '../../src/3D/Vector3';

describe('Vector3', () => {

  test('should instantiate correctly', () => {
    const vector: Vector3 = new Vector3(2, 4, 6);
  
    expect(vector).toBeInstanceOf(Vector3);
  });
  
  test('should calculate the magnitude correctly', () => {
    const vector: Vector3 = new Vector3(2, 4, 2);
  
    expect(vector.magnitude).toEqual(Math.sqrt(24));
  });
  
});
