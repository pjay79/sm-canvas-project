/* Calculate the x, y coordinates on a circle with a known radius and angle */
export const getCoords = (radius: number, angle: number): [number, number] => {
  const x = radius * Math.sin(Math.PI * 2 * (angle / 360));
  const y = radius * Math.cos(Math.PI * 2 * (angle / 360));

  return [x, y];
};
