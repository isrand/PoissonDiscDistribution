import { Point2 } from '../../src/geometry/Point2';
import { Area2 } from '../../src/geometry/Area2';

describe('Point2', () => {
  test('should instantiate correctly', () => {
    const point: Point2 = new Point2(2, 4);
  
    // Point is instantiated correctly.
    expect(point).toBeInstanceOf(Point2);
  });
  
  test('should calculate the distance between two points correctly', () => {
    const pointA: Point2 = new Point2(0, 0);
    const pointB: Point2 = new Point2(4, 4);
  
    // Expected result is correct.
    expect(pointA.distance(pointB)).toBe(Math.sqrt(32));
  });  

  test('should instantiate a new point inside its annulus correctly', () => {
    const pointA: Point2 = new Point2(0, 0);
    const minRadius: number = 2;
    const maxRadius: number = 4;
    let testPasses: boolean = true;

    for(let i = 0; i < 1000; i +=1 ) {
      const pointInsideAnnulus: Point2 = pointA.generateRandomPointInsideAnnulus(minRadius, maxRadius);
      testPasses = (pointInsideAnnulus.isInsideAnnulus(pointA, minRadius, maxRadius)) ? true : false;
      if(!testPasses) break;
    }

    expect(testPasses).toEqual(true);
    
  });

  
  test('should determine if it\'s contained inside an area correctly', () => {
  
    let testPasses: boolean = true;
    const area: Area2 = new Area2(40, 40, 10, 10);
  
    for (let i: number = 0; i < 50; i += 1) {
  
      const pointInsideArea: Point2 = area.generateRandomPoint2();
      testPasses = (pointInsideArea.isInsideArea(area)) ? true : false;
      if (!testPasses) break;
  
    }
  
    expect(testPasses).toEqual(true);
  });
});

