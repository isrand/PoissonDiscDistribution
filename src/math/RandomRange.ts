/**
  *Returns a random number between 0 and max (exclusive)
  @public
  @param {Number} max Max number (exclusive)
  @returns {Number} Returns the distance between the two points.
  */
export function randomRange(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}
