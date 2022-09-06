/* Calculate the angle between the hour and minute hands of a clock */
export const getAngle = (hours: number, minutes: number): number => {
  const ANGLE_PER_HOUR = 360 / 12,
    ANGLE_PER_MINUTE = 360 / 60,
    minuteHand = minutes * ANGLE_PER_MINUTE,
    hourHand = hours * ANGLE_PER_HOUR + (minutes / 60) * ANGLE_PER_HOUR;

  const angle = Math.abs(hourHand - minuteHand);

  return Math.min(360 - angle, angle);
};
