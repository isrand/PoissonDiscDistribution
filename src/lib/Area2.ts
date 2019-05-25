import { Point2 } from './Point2';
import { Lerp } from '../utils/Lerp';

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
    // 0 -> centerPositionX - width / 2
    // 1 -> centerPositionX + width / 2
    const randX: number = Math.random();
    const posX: number = Lerp(0, (this.centerPositionX - this.width / 2), randX, 1, (this.centerPositionX + this.width / 2));
    console.log(posX);
    const posY: number = Math.random();

    return new Point2(posX, posY);
  }
}
