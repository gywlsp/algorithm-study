function solution(a, b) {
  return a.reduce((acc, curr, index) => {
    return acc + curr * b[index];
  }, 0);
}
