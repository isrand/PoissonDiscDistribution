import { IVector } from '../interfaces/IVector';

/** Vector object in 3D coordinates `(X, Y, Z).` */
export class Vector3 implements IVector {

  /** First component of the vector. */
  public x: number;
  /** Second component of the vector. */
  public y: number;
  /** Third component of the vector. */
  public z: number;
  /** Magnitude of the vector (square root of the sum of squared components). */
  public magnitude: number;

   /**
  @param x First component of the vector.
  @param y Second component of the vector.
  @param z Third component of the vector.
  */
  public constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.magnitude = this.calculateMagnitude();
  }

  public calculateMagnitude(): number {
    return Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)));
  }

}
