const numList = [1, 2, 3, 3, 3, 4, 4, 5];

const INF = 987654321;
let result1 = INF,
  result2 = INF;

const lower_bound1 = (start, end, key) => {
  if (start > end) {
    return;
  }
  const mid = Math.floor((start + end) / 2);
  if (numList[mid] < key) {
    lower_bound1(mid + 1, end, key);
    return;
  }
  result1 = Math.min(result1, mid);
  lower_bound1(start, mid - 1, key);
};

const lower_bound2 = (key) => {
  let start = 0,
    end = numList.length - 1,
    mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (numList[mid] < key) {
      start = mid + 1;
      continue;
    }
    result2 = Math.min(result2, mid);
    end = mid - 1;
  }
};

lower_bound1(0, numList.length - 1, 3);
lower_bound2(3);
console.log(result1, result2);
