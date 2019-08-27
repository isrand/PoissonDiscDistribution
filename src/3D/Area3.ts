import { IArea } from '../interfaces/IArea';
import { Point3 } from './Point3';
import { randomRange } from '../utils/RandomRange';

/** Cubic area in 3D coordinates `(X, Y, Z).` */
export class Area3 implements IArea {

  /** Width of the area. */
  public width: number;
  /** Height of the area. */
  public height: number;
  /** Depth of the area. */
  public depth: number;
  /** Center position of the area in the x axis. */
  public centerPositionX: number;
  /** Center position of the area in the y axis. */
  public centerPositionY: number;
  /** Center position of the area in the z axis. */
  public centerPositionZ: number;

  /**
  @param width  Width of the area.
  @param height Height of the area.
  @param depth Depth of the area.
  @param centerPositionX Center position of the area in the x axis.
  @param centerPositionY Center position of the area in the y axis.
  @param centerPositionZ Center position of the area in the Z axis.
  */
  public constructor(width: number, height: number, depth: number, centerPositionX: number, centerPositionY: number, centerPositionZ: number) {
    this.width = width;
    this.height = height;
    this.depth = depth;

    this.centerPositionX = centerPositionX;
    this.centerPositionY = centerPositionY;
    this.centerPositionZ = centerPositionZ;
  }

  /**
  *Generates a `Point3` of random `(X, Y, Z)` coordinates inside this area.
  @public
  @returns {Point3} Random point inside of the area.
  */
  public generateRandomPoint(): Point3 {

    const modulusX: number = (Math.random() <= 0.5) ? -1 : 1;
    const posX: number = this.centerPositionX + (modulusX * randomRange(this.width / 2));

    const modulusY: number = (Math.random() <= 0.5) ? -1 : 1;
    const posY: number = this.centerPositionY + (modulusY * randomRange(this.height / 2));

    const modulusZ: number = (Math.random() <= 0.5) ? -1 : 1;
    const posZ: number = this.centerPositionZ + (modulusZ * randomRange(this.depth / 2));

    return new Point3(posX, posY, posZ);
  }
}
