import { IVector } from '../interfaces/IVector';

/** Vector object in 2D coordinates `(X, Y).` */
export class Vector2 implements IVector {

  /** First component of the vector. */
  public x: number;
  /** Second component of the vector. */
  public y: number;
  /** Magnitude of the vector (square root of the sum of squared components). */
  public magnitude: number;

   /**
  @param x First component of the vector.
  @param y Second component of the vector.
  */
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.magnitude = this.calculateMagnitude();
  }

  public calculateMagnitude(): number {
    return Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2)));
  }

}
