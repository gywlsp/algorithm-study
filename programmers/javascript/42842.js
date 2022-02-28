function solution(brown, yellow) {
  let result;
  const ySqrt = Math.sqrt(yellow);
  for (let yw = 1; yw <= Math.floor(ySqrt); yw++) {
    if (yellow % yw) {
      continue;
    }
    const yh = yellow / yw;
    if ((yw + 2) * (yh + 2) === brown + yellow) {
      result = [yw + 2, yh + 2];
      break;
    }
  }
  return result;
}
