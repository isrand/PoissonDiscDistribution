import { Vector2 } from './Vector2';

export class Point2 {

  public constructor(/**First component of the point */public x: number, /**Second component of the point */public y: number){};
  
  /**
   *Returns the distance between this point and the given one.
   */
  public Distance(point: Point2): number {
    let distanceVector: Vector2 = new Vector2(point.x - this.x, point.y - this.y);
    return distanceVector.magnitude;
  }

  /**
  *Generates a random point inside of the radius provided, using this point as the origin of coordinates. 
  */
  public RandomPointInsideCircle(radius: number) {
    
    const a: number = Math.random() * 2 * Math.PI;
    const R: number = radius * Math.sqrt(Math.random());

    const x: number = this.x + R * Math.cos(a);
    const y: number = this.y + R * Math.sin(a);

    return new Point2(x, y);
  }

  /**
  * Checks whether or not a point is inside another's point circle, given by its radus and using the second point as the origin of coordinates. 
  */
  public static IsPointInsideCircle(point: Point2 , coordinatesOrigin: Point2, radius: number): boolean {
    return point.Distance(coordinatesOrigin) <= radius;
  }

  public RandomPointInsideAnnulus(minRadius: number, maxRadius: number): Point2 {
    let randomPoint: Point2 = this.RandomPointInsideCircle(maxRadius);
    let isPointValid: boolean = Point2.IsPointInsideCircle(randomPoint, this, maxRadius) && !Point2.IsPointInsideCircle(randomPoint, this, minRadius);
    while(!isPointValid) {
      randomPoint = this.RandomPointInsideCircle(maxRadius);
      isPointValid = Point2.IsPointInsideCircle(randomPoint, this, maxRadius) && !Point2.IsPointInsideCircle(randomPoint, this, minRadius);
    }
    return randomPoint;
  }
}