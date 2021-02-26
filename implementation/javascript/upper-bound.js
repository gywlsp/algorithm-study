const numList = [1, 2, 3, 3, 3, 4, 4, 5];

const INF = 987654321;
let result1 = INF,
  result2 = INF;

const upper_bound1 = (start, end, key) => {
  if (start > end) {
    return;
  }
  const mid = Math.floor((start + end) / 2);
  if (numList[mid] <= key) {
    upper_bound1(mid + 1, end, key);
    return;
  }
  result1 = Math.min(result1, mid);
  upper_bound1(start, mid - 1, key);
};

const upper_bound2 = (key) => {
  let start = 0,
    end = numList.length - 1,
    mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (numList[mid] <= key) {
      start = mid + 1;
      continue;
    }
    result2 = Math.min(result2, mid);
    end = mid - 1;
  }
};

upper_bound1(0, numList.length - 1, 3);
upper_bound2(3);
console.log(result1, result2);

//(+) 연속되는 숫자 중 가장 마지막 수의 위치 출력
console.log(numList[result1 - 1] === 3 ? result1 - 1 : INF);
