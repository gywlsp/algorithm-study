const solution = (lines) => {
  let answer = 0;
  const arr = [];
  const logPoints = [];

  for (let i = 0; i < lines.length; i++) {
    const [_, S, T] = lines[i].split(" ");
    const endSec =
      Number(S.slice(0, 2)) * 3600 +
      Number(S.slice(3, 5)) * 60 +
      Number(S.slice(6, 12));
    const duration = Number(T.slice(0, T.length - 1));
    const startSec = endSec - duration + 0.001;
    arr.push([startSec, endSec]);
    logPoints.push(startSec, endSec);
  }

  logPoints.sort((a, b) => a - b);

  for (let i = 0; i < logPoints.length; i++) {
    const startRange = logPoints[i];
    const endRange = logPoints[i] + 1;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      const [startPoint, endPoint] = arr[j];
      if (
        (startPoint >= startRange && startPoint < endRange) ||
        (endPoint >= startRange && endPoint < endRange) ||
        (startPoint <= startRange && endPoint >= endRange)
      ) {
        count++;
      }
    }

    if (count > answer) {
      answer = count;
    }
  }

  return answer;
};
