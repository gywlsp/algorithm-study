function solution(w, h) {
  const getY = (x) => {
    return (-h * x) / w;
  };
  let deleteCnt = 0;
  for (let x = 0; x < w; x++) {
    const yStart = getY(x);
    const yEnd = getY(x + 1);
    deleteCnt += Math.ceil(yStart) - Math.floor(yEnd);
  }
  return w * h - deleteCnt;
}
