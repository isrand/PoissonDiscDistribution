import { Vector2 } from './Vector2';

/**
*Point object in 2D coordinates `(X, Y).`
*/
export class Point2 {

  public constructor(/**First component of the point.*/public x: number,
                     /**Second component of the point.*/public y: number) {}

  /**
   *Returns the distance between this point and the given one.
   @param point Point to check the distance to.
   */
  public Distance(point: Point2): number {
    const distanceVector: Vector2 = new Vector2(point.x - this.x, point.y - this.y);

    return distanceVector.magnitude;
  }

  /**
  *Generates a random point inside an area using this point as the origin of coordinates.
  @param radius Radius of the circle around the origin of coordinates to be used as the area.
  */
  public RandomPointInsideCircle(radius: number): Point2 {

    const a: number = Math.random() * 2 * Math.PI;
    const R: number = radius * Math.sqrt(Math.random());

    const x: number = this.x + R * Math.cos(a);
    const y: number = this.y + R * Math.sin(a);

    return new Point2(x, y);
  }

  /**
  *Checks whether or not a point is inside another's point circle.
  @param point Point to check.
  @param coordinatesOrigin Original point that has the area around it.
  @param radius Radius of the area around the original point.
  */
  public static IsPointInsideCircle(point: Point2 , coordinatesOrigin: Point2, radius: number): boolean {
    return point.Distance(coordinatesOrigin) <= radius;
  }

  /**
  *Returns a new random point inside the given annulus.
  @param minRadius Radius of the inner circle of the annulus.
  @param maxRadius Radius of the outer circle of the annulus.
  */
  public GenerateRandomPointInsideAnnulus(minRadius: number, maxRadius: number): Point2 {
    let randomPoint: Point2 = this.RandomPointInsideCircle(maxRadius);
    let isPointValid: boolean = Point2.IsPointInsideCircle(randomPoint, this, maxRadius) &&
                                !Point2.IsPointInsideCircle(randomPoint, this, minRadius);

    // If randomPoint is valid on the first try, these lines will appear as uncovered in the unit test coverage report.
    while (!isPointValid) {
      randomPoint = this.RandomPointInsideCircle(maxRadius);
      isPointValid = Point2.IsPointInsideCircle(randomPoint, this, maxRadius) &&
                     !Point2.IsPointInsideCircle(randomPoint, this, minRadius);
    }

    return randomPoint;
  }
}
