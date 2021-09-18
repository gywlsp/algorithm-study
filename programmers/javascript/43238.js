function solution(n, times) {
  let answer = Number.MAX_VALUE;
  times.sort((a, b) => a - b);
  let start = 1,
    end = n * times[times.length - 1];
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const total = times.reduce((acc, time) => {
      return acc + Math.floor(mid / time);
    }, 0);
    if (total >= n) {
      answer = Math.min(answer, mid);
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}
