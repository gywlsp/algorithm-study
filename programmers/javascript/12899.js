function solution(n) {
  let result = "";
  while (n / 3) {
    result = (n % 3 || 4) + result;
    n = Math.floor(n / 3) - (n % 3 ? 0 : 1);
  }
  return result;
}
