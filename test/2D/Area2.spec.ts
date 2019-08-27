import { Area2 } from '../../src/2D/Area2';
import { Point2 } from '../../src/2D/Point2';

describe('Area2', () => {

  test('should instantiate correctly', () => {
    const area: Area2 = new Area2(400, 400, 0, 0);

    expect(area).toBeInstanceOf(Area2);
  });

  test('should create a point contained inside correctly', () => {
    const area: Area2 = new Area2(400, 400, 0, 0);

    for(let i = 0; i < 50; i+=1 ) {
      const pointInsideArea: Point2 = area.generateRandomPoint();
      expect(pointInsideArea.isInsideArea(area)).toEqual(true);
    }
    
  });
});
