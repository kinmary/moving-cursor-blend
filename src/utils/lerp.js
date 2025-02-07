export const lerp = (start, end, t) => { // Linear interpolation function
  return start * (1 - t) + end * t;
};
