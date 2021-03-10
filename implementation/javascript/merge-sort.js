const numbers = [1, 11, 2, 33, 4];
const sorted = Array(numbers.length).fill(undefined);

const mergeSort = (numbers, start, end) => {
  if (start >= end) {
    return;
  }
  const mid = Math.floor((start + end) / 2);
  mergeSort(numbers, start, mid);
  mergeSort(numbers, mid + 1, end);
  merge(numbers, start, mid, end);
};

const merge = (numbers, start, mid, end) => {
  let leftIndex = start,
    rightIndex = mid + 1,
    insertIndex = start;
  while (leftIndex <= mid && rightIndex <= end) {
    if (numbers[leftIndex] <= numbers[rightIndex]) {
      sorted[insertIndex] = numbers[leftIndex++];
    } else {
      sorted[insertIndex] = numbers[rightIndex++];
    }
    insertIndex++;
  }
  if (leftIndex > mid) {
    for (let i = rightIndex; i <= end; i++) {
      sorted[insertIndex] = numbers[i];
      insertIndex++;
    }
  } else {
    for (let j = leftIndex; j <= mid; j++) {
      sorted[insertIndex] = numbers[j];
      insertIndex++;
    }
  }
  
  for (let k = start; k <= end; k++) {
    numbers[k] = sorted[k];
  }
};

console.log(numbers);
mergeSort(numbers, 0, numbers.length - 1);
console.log(sorted);
