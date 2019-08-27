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

  public distance(point: Point3): number {
    const distanceVector: Vector3 = new Vector3(point.x - this.x, point.y - this.y, point.z - this.z);

    return distanceVector.magnitude;
  }

  public isInsideArea(area: Area3): boolean {
    return ((this.x >= (area.centerPositionX - area.width / 2)) && (this.x <= (area.centerPositionX + area.width / 2)))
      && ((this.y >= (area.centerPositionY - area.height / 2)) && (this.y <= (area.centerPositionY + area.height / 2)))
      && ((this.z >= (area.centerPositionZ - area.depth / 2)) && (this.z <= (area.centerPositionZ + area.depth / 2)));
  }

  public isInsideSphere(origin: Point3, radius: number): boolean {
    return this.distance(origin) <= radius;
  }

  public isInsideSphericalShell(origin: Point3, minRadius: number, maxRadius: number): boolean {
    return !this.isInsideSphere(origin, minRadius) &&
            this.isInsideSphere(origin, maxRadius);
  }

  public generateRandomPointInsideSphere(radius: number): Point3 {
    const theta = randomRange(Math.PI * 2);
    const phi = randomRange(Math.PI) - Math.PI / 2;
    const R = radius * Math.sqrt(Math.random());

    const x = this.x + R * Math.cos(theta) * Math.cos(phi);
    const y = this.y + R * Math.sin(phi);
    const z = this.z + R * Math.sin(theta) * Math.cos(phi);

    return new Point3(x, y, z);
  }

  public generateRandomPoint(minRadius: number, maxRadius: number): Point3 {
    let randomPoint: Point3;
    do {
      randomPoint = this.generateRandomPointInsideSphere(maxRadius);
    } while (!randomPoint.isInsideSphericalShell(this, minRadius, maxRadius));
    return randomPoint;
  }
}
