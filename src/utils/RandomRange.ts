/**
  *Returns a random number between 0 and max (exclusive)
  @public
  @param max Max number (exclusive)
  */
export function randomRange(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}
