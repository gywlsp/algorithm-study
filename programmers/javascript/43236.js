function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b).push(distance);
  let left = 1,
    right = distance,
    result;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let minD = Number.MAX_SAFE_INTEGER;
    let curr = 0,
      removeCnt = 0;
    rocks.forEach((rock) => {
      let d = rock - curr;
      if (d < mid) {
        removeCnt++;
      } else {
        curr = rock;
        minD = Math.min(minD, d);
      }
    });
    if (removeCnt > n) {
      right = mid - 1;
    } else {
      result = minD;
      left = mid + 1;
    }
  }
  return result;
}
