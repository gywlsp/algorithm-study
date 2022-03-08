function solution(N, number) {
  let result = -1;
  const DP = [null];
  for (let n = 1; n <= 8; n++) {
    const set = new Set();
    set.add(Number(String(N).repeat(n)));
    for (let i = 1; i <= n - 1; i++) {
      DP[i].forEach((x) => {
        DP[n - i].forEach((y) => {
          set.add(x + y);
          set.add(x - y);
          set.add(x * y);
          if (y) {
            set.add(x / y);
          }
        });
      });
    }
    if (set.has(number)) {
      result = n;
      break;
    }
    DP.push(set);
  }
  return result;
}
