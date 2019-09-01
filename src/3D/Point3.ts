import { Vector3 } from './Vector3';
import { Area3 } from './Area3';
import { IPoint } from '../interfaces/IPoint';
import { randomRange } from '../utils/RandomRange';

/** Point object in 3D coordinates `(X, Y, Z)`. */
export class Point3 implements IPoint {

  /** First component of the point. */
  public x: number;
  /** Second component of the point. */
  public y: number;
  /** Third component of the point. */
  public z: number;

  public constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
  *Returns the distance between this point and the given one.
  @public
  @param point Point to check the distance to.
  @returns Distance between the two points.
  */
  public distance(point: Point3): number {
    const distanceVector: Vector3 = new Vector3(point.x - this.x, point.y - this.y, point.z - this.z);

    return distanceVector.magnitude;
  }

  /**
  *Checks whether or not a point is inside a given area.
  @public
  @param area Area.
  @returns Boolean indicating the result of the check.
  */
  public isInsideArea(area: Area3): boolean {
    return ((this.x >= (area.centerPositionX - area.width / 2)) && (this.x <= (area.centerPositionX + area.width / 2)))
      && ((this.y >= (area.centerPositionY - area.height / 2)) && (this.y <= (area.centerPositionY + area.height / 2)))
      && ((this.z >= (area.centerPositionZ - area.depth / 2)) && (this.z <= (area.centerPositionZ + area.depth / 2)));
  }

  /**
  *Checks whether or not this point is inside another's point sphere.
  @public
  @param origin Origin point that has the volume around it.
  @param radius Radius of the sphere around the original point.
  @returns Boolean indicating the result of the check.
  */
  public isInsideSphere(origin: Point3, radius: number): boolean {
    return this.distance(origin) <= radius;
  }

  /**
  *Checks whether or not this point is inside another point's spherical shell.
  @public
  @param origin Original point that has the spherical shell around it.
  @param minRadius Radius of the inner sphere of the shell.
  @param maxRadius Radius of the outer sphere of the shell.
  @returns Boolean indicating the result of the check.
  */
  public isInsideSphericalShell(origin: Point3, minRadius: number, maxRadius: number): boolean {
    return !this.isInsideSphere(origin, minRadius) &&
            this.isInsideSphere(origin, maxRadius);
  }

  /**
  *Generates a random point inside a spherical volume using this point as the origin of coordinates.
  @public
  @param radius Radius of the sphere around the origin of coordinates to be used as the volume.
  @returns Point3 Point inside the circle.
  */
  public generateRandomPointInsideSphere(radius: number): Point3 {
    const theta = randomRange(Math.PI * 2);
    const phi = randomRange(Math.PI) - Math.PI / 2;
    const R = radius * Math.sqrt(Math.random());

    const x = this.x + R * Math.cos(theta) * Math.cos(phi);
    const y = this.y + R * Math.sin(phi);
    const z = this.z + R * Math.sin(theta) * Math.cos(phi);

    return new Point3(x, y, z);
  }

  /**
  *Returns a new random point inside the given spherical shell.
  @public
  @param minRadius Radius of the inner sphere of the shell.
  @param maxRadius Radius of the outer sphere of the shell.
  @returns Point3 Point inside the spherical shell.
  */
  public generateRandomPoint(minRadius: number, maxRadius: number): Point3 {
    let randomPoint: Point3;
    do {
      randomPoint = this.generateRandomPointInsideSphere(maxRadius);
    } while (!randomPoint.isInsideSphericalShell(this, minRadius, maxRadius));
    return randomPoint;
  }
}
