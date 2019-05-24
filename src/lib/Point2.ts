import { Vector2 } from './Vector2';
import { Area2 } from './Area2';

/** Point object in 2D coordinates `(X, Y).` */
export class Point2 {

  /** First component of the point. */
  public x: number;
  /** Second component of the point. */
  public y: number;

  /**
  @param x Position in the x axis.
  @param y Position in the y axis.
  */
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
  *Returns the distance between this point and the given one.
  @public
  @param {Point2} point Point to check the distance to.
  @returns {Number} Returns the distance between the two points.
  */
  public Distance(point: Point2): number {
    const distanceVector: Vector2 = new Vector2(point.x - this.x, point.y - this.y);

    return distanceVector.magnitude;
  }

  /**
  *Checks whether or not a point is inside a given area.
  @param area Interface that defines the area.
  */
  public IsInsideOfArea(area: Area2): boolean {
    return this.x >= area.centerPositionX - area.width / 2 && this.x <= area.centerPositionX + area.width / 2
        && this.y >= area.centerPositionY - area.height / 2 && this.x <= area.centerPositionY + area.height / 2;
  }

  /**
  *Generates a random point inside a circular area using this point as the origin of coordinates.
  @param radius Radius of the circle around the origin of coordinates to be used as the area.
  */
  public GenerateRandomPointInsideCircle(radius: number): Point2 {
    const a: number = Math.random() * 2 * Math.PI;
    const R: number = radius * Math.sqrt(Math.random());

    const x: number = this.x + R * Math.cos(a);
    const y: number = this.y + R * Math.sin(a);

    return new Point2(x, y);
  }

  /**
  *Checks whether or not a point is inside another's point circle.
  @param origin Origin point that has the area around it.
  @param radius Radius of the area around the original point.
  */
  public IsInsideCircle(origin: Point2, radius: number): boolean {
    return this.Distance(origin) <= radius;
  }

  /**
  *Checks whether or not a point is inside another's point annulus.
  @param origin Original point that has the annulus around it.
  @param minRadius Radius of the inner circle of the annulus.
  @param maxRadius Radius of the outer circle of the annulus.
  */
  public IsInsideAnnulus(origin: Point2, minRadius: number, maxRadius: number): boolean {
    return !this.IsInsideCircle(origin, minRadius) &&
            this.IsInsideCircle(origin, maxRadius);
  }

  /**
  *Returns a new random point inside the given annulus.
  @param minRadius Radius of the inner circle of the annulus.
  @param maxRadius Radius of the outer circle of the annulus.
  */
  public GenerateRandomPointInsideAnnulus(minRadius: number, maxRadius: number): Point2 {
    const randomPoint: Point2 = this.GenerateRandomPointInsideCircle(maxRadius);
    const isPointValid: boolean = randomPoint.IsInsideAnnulus(this, minRadius, maxRadius);

    // The non-deterministic nature of the random point generation will cause a branch in tests.
    return (isPointValid)
      ? randomPoint
      : this.GenerateRandomPointInsideAnnulus(minRadius, maxRadius);
  }
}
