import { Point2 } from './Point2';

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

  public GenerateRandomPoint2(): Point2 {
    // 0 -> centerPositionX - width / 2
    // 1 -> centerPositionX + width / 2
    const posX: number = Math.random();
    const posY: number = Math.random();

    return new Point2(posX, posY);
  }
}
