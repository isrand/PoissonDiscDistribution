import { Point2 } from './Point2';
import { randomRange } from '../utils/RandomRange';
import { IArea } from '../interfaces/IArea';

/** Square area in 2D coordinates `(X, Y).` */
export class Area2 implements IArea {

  /** Width of the area. */
  public width: number;
  /** Height of the area. */
  public height: number;
  /** Center position of the area in the x axis. */
  public centerPositionX: number;
  /** Center position of the area in the y axis. */
  public centerPositionY: number;

  /**
  @param width  Width of the area.
  @param height Height of the area.
  @param centerPositionX Center position of the area in the x axis.
  @param centerPositionY Center position of the area in the y axis.
  */
  public constructor(width: number, height: number, centerPositionX: number, centerPositionY: number) {
    this.width = width;
    this.height = height;

    this.centerPositionX = centerPositionX;
    this.centerPositionY = centerPositionY;
  }

  /**
  *Generates a `Point2` of random `(X, Y)` coordinates inside this area.
  @public
  @returns {Point2} Random point inside of the area.
  */
  public generateRandomPoint(): Point2 {

    const modulusX: number = (Math.random() <= 0.5) ? -1 : 1;
    const posX: number = this.centerPositionX + (modulusX * randomRange(this.width / 2));

    const modulusY: number = (Math.random() <= 0.5) ? -1 : 1;
    const posY: number = this.centerPositionY + (modulusY * randomRange(this.height / 2));

    return new Point2(posX, posY);
  }
}
