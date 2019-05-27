/**
  *Calculates the linear interpolation between x1 and x3 given x2 and the values of y1 and y3.
  @public
  @param x1: Value of x1.
  @param y1: Value of y1.
  @param x2: Value of x2.
  @param x3: Value of x3.
  @param y3: Value of y3.
  @returns `y2`: the value of the linear interpolation.
  */
export function lerp(x1: number, y1: number, x2: number, x3: number, y3: number): number {
  const topPart1: number = (x2 - x1);
  const topPart2: number = (y3 - y1);
  const topPartResult: number = topPart1 * topPart2;
  const bottomPartResult: number = (x3 - x1);
  const divisionResult: number = topPartResult / bottomPartResult;
  const result: number = divisionResult + y1;
  return result;
}
