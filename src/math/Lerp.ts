export function lerp(x1: number, y1: number, x2: number, x3: number, y3: number): number {
  const topPart1: number = (x2 - x1);
  const topPart2: number = (y3 - y1);
  const topPartResult: number = topPart1 * topPart2;
  const bottomPartResult: number = (x3 - x1);
  const divisionResult: number = topPartResult / bottomPartResult;
  const result: number = divisionResult + y1;
  return result;
}
