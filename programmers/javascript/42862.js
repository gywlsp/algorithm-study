function solution(n, lost, reserve) {
  for (let i = 1; i <= n; i++) {
    const l = lost.indexOf(i);
    const r = reserve.indexOf(i);
    if (l !== -1 && r !== -1) {
      lost[l] = 0;
      reserve[r] = 0;
    }
  }
  lost = lost.filter((_n) => _n).sort((a, b) => a - b);
  reserve = reserve.filter((_n) => _n).sort((a, b) => a - b);

  lost.forEach((_n, i) => {
    const left = reserve.indexOf(_n - 1);
    const right = reserve.indexOf(_n + 1);
    if (left === -1 && right === -1) {
      return;
    }
    reserve[left !== -1 ? left : right] = -1;
    lost[i] = 0;
  });
  return lost.reduce((acc, curr) => (curr ? acc - 1 : acc), n);
}
