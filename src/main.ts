import { PoissonDiscDistribution } from './poissonDiscDistribution/PoissonDiscDistribution';
import { Area2 } from './2D/Area2';
import { Area3 } from './3D/Area3';
import { Point3 } from './3D/Point3';
import { IArea } from './interfaces/IArea';
import { IPoint } from './interfaces/IPoint';
import * as readlineSync from 'readline-sync';

let space: string;
let areaWidth: number;
let areaHeight: number;
let areaDepth: number;
let areaCenterX: number;
let areaCenterY: number;
let areaCenterZ: number;
let k: number;
let radius: number;

let area: IArea;

function showTitle() {
  console.log('Poisson Disc Distribution v1.0');
}

function getSpace() {
  space = readlineSync.question('2D or 3D? ');
}

function getArea() {
  const width = readlineSync.question('Area width? ');
  const height = readlineSync.question('Area height? ');
  if (space === '3D') {
    const depth = readlineSync.question('Area depth? ');
    areaDepth = +depth;
  }
  const centerX = readlineSync.question('Area center X? ');
  const centerY = readlineSync.question('Area center Y? ');
  if (space === '3D') {
    const centerZ = readlineSync.question('Area center Z? ');
    areaCenterZ = +centerZ;
  }
  areaWidth = +width;
  areaHeight = +height;
  areaCenterX = +centerX;
  areaCenterY = +centerY;

  if (space === '2D') {
    area = new Area2(areaWidth, areaHeight, areaCenterX, areaCenterY);
  } else {
    area = new Area3(areaWidth, areaHeight, areaDepth, areaCenterX, areaCenterY, areaCenterZ);
  }
}

function getK() {
  k = readlineSync.question('K? ');
}

function getRadius() {
  radius = readlineSync.question('Radius? ');
}

function generateDistribution() {
  const distribution = PoissonDiscDistribution.generateDistribution(area, k, radius);
  for (const sample of distribution) {
    if ('z' in sample) {
      const s = sample as Point3;
      console.log(`${Math.round(s.x)}, ${Math.round(s.y)}, ${Math.round(s.z)}`);
    } else {
      console.log(`${Math.round(sample.x)}, ${Math.round(sample.y)}`);
    }
  }
}

function main() {
  showTitle();
  getSpace();
  getArea();
  getK();
  getRadius();
  generateDistribution();
}

main();
