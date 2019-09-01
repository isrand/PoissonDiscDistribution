import { Point3 } from '../../src/3D/Point3';
import { Area3 } from '../../src/3D/Area3';

describe('Point3', () => {
  test('should instantiate correctly', () => {
    const point: Point3 = new Point3(2, 4, 6);
  
    // Point is instantiated correctly.
    expect(point).toBeInstanceOf(Point3);
  });
  
  test('should calculate the distance between two points correctly', () => {
    const pointA: Point3 = new Point3(0, 0, 0);
    const pointB: Point3 = new Point3(4, 4, 4);
  
    // Expected result is correct.
    expect(pointA.distance(pointB)).toBe(Math.sqrt(48));
  });  

  test('should instantiate a new point inside its spherical shell correctly', () => {
    const pointA: Point3 = new Point3(0, 0, 0);
    const minRadius: number = 2;
    const maxRadius: number = 4;
    let testPasses: boolean = true;

    for(let i = 0; i < 1000; i +=1 ) {
      const pointInsideAnnulus: Point3 = pointA.generateRandomPoint(minRadius, maxRadius);
      testPasses = (pointInsideAnnulus.isInsideSphericalShell(pointA, minRadius, maxRadius)) ? true : false;
      if(!testPasses) break;
    }

    expect(testPasses).toEqual(true);
    
  });

  
  test('should determine if it\'s contained inside an area correctly', () => {
  
    let testPasses: boolean = true;
    const area: Area3 = new Area3(40, 40, 40, 10, 10, 10);
  
    for (let i: number = 0; i < 50; i += 1) {
  
      const pointInsideArea: Point3 = area.generateRandomPoint();
      testPasses = (pointInsideArea.isInsideArea(area)) ? true : false;
      if (!testPasses) break;
  
    }
  
    expect(testPasses).toEqual(true);
  });
});
