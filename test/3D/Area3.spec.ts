import { Area3 } from '../../src/3D/Area3';
import { Point3 } from '../../src/3D/Point3';

describe('Area3', () => {

  test('should instantiate correctly', () => {
    const area: Area3 = new Area3(400, 400, 400, 0, 0, 0);

    expect(area).toBeInstanceOf(Area3);
  });

  test('should create a point contained inside correctly', () => {
    const area: Area3 = new Area3(400, 400, 400, 0, 0, 0);

    for(let i = 0; i < 50; i+=1 ) {
      const pointInsideArea: Point3 = area.generateRandomPoint();
      expect(pointInsideArea.isInsideArea(area)).toEqual(true);
    }
    
  });
});
