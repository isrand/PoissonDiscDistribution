import { Vector2 } from '../lib/Vector2';
import { Point2 } from '../lib/Point2';

function TestVector2() {
  let point: Point2 = new Point2(0,0);
  let radius: number = 2;

  console.log(point.RandomPointInsideAnnulus(2, 4));

}

TestVector2();