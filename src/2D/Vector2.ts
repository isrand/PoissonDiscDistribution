/** Vector object in 2D coordinates `(X, Y).` */
export class Vector2 {

  /** First component of the vector. */
  public x: number;
  /** Second component of the vector. */
  public y: number;
  /** Magnitude of the vector (square root of the sum of squared components). */
  public magnitude: number;
  /** Squared magnitude of the vector (sum of squared components). */
  public sqMagnitude: number;

   /**
  @param x First component of the vector.
  @param y Second component of the vector.
  */
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.magnitude = this.calculateMagnitude();
    this.sqMagnitude = Math.pow(this.calculateMagnitude(), 2);
  }

  private calculateMagnitude(): number {
    return Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2)));
  }

  /**
  *Returns the associated unit vector.
  @public
  @returns `Vector2` representing the unit vector of this vector.
  */
  public unitVector(): Vector2 {
    return new Vector2(this.x / this.magnitude, this.y / this.magnitude);
  }

}
