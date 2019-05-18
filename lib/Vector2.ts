export class Vector2 {

  /**
   *Magnitude of the vector (square root of the sum of squared components)
   */
  public magnitude: number;
  /**
   *Squared magnitude of the vector (sum of squared components)
   */
  public sqMagnitude: number;

  public constructor(/**First component of the vector */public x: number,
                     /**Second component of the vector */public y: number) {
    this.magnitude = this.Magnitude();
    this.sqMagnitude = Math.pow(this.Magnitude(), 2);
  }

  private Magnitude(): number {
    return Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2)));
  }

  /**
   *Associated unit vector (this vector's each component / this vector's magnitude)
   */
  public UnitVector(): Vector2 {
    const magnitude: number = this.magnitude;
    const newX: number = this.x / magnitude;
    const newY: number = this.y / magnitude;
    const newVector2: Vector2 = new Vector2(newX, newY);

    return newVector2;
  }

}
