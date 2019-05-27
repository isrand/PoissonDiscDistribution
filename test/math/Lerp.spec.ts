import { lerp } from '../../src/math/Lerp';

describe('Linear interpolation library ', () => {
  test('returns a correct result.', () => {

    const x1: number = 2;
    const x2: number = 2;
    const x3: number = 4;
    const y1: number = 5;
    const y3: number = 6;

    expect(lerp(x1, y1, x2, x3, y3)).toEqual(5);
  });
});
