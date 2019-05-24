export function Lerp(x1: number, y1: number, x2: number, x3: number, y3: number): number {
  const result: number = ( (x2-x1) * (y3-y1) / (x3-x1) ) + y1;
  console.log(result);
  return result;
}