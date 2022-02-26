function solution(citations) {
  let result = 0;
  const len = citations.length;
  citations.sort((a, b) => a - b);
  for (let h = 0; h <= 10000; h++) {
    const i = citations.findIndex((v) => v >= h);
    if (i === -1 || len - i < h) {
      continue;
    }
    result = h;
  }
  return result;
}
