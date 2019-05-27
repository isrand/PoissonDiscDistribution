import { Point2 } from './Point2';
import { lerp } from '../math/Lerp';
import { randomRange } from '../math/RandomRange';

export class Area2 {
  public width: number;
  public height: number;
  public centerPositionX: number;
  public centerPositionY: number;

  public constructor(width: number, height: number, centerPositionX: number, centerPositionY: number) {
    this.width = width;
    this.height = height;
    this.centerPositionX = centerPositionX;
    this.centerPositionY = centerPositionY;
  }

  public generateRandomPoint2(): Point2 {

    const modulusX: number = (Math.random() <= 0.5) ? -1 : 1;
    const posX: number = this.centerPositionX + (modulusX * randomRange(this.width / 2));

    const modulusY: number = (Math.random() <= 0.5) ? -1 : 1;
    const posY: number = this.centerPositionY + (modulusY * randomRange(this.height / 2));

    return new Point2(posX, posY);
  }
}
