import { Lerp } from '../../src/utils/Lerp'

test('Linear interpolation works as expected', () => {

  const x1: number = 1;
  const x2: number = 1;
  const x3: number = 1;
  const y1: number = 1;
  const y3: number = 1;

  // Point is instantiated correctly.
  expect(Lerp(x1, y1, x2, x3, y3)).toEqual(4);
});