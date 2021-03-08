const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    const numbers = strToNumArr(input[1]);
    const searchNumbers = strToNumArr(input[3]);
    quickSort(numbers, 0, N - 1);

    const result = [];
    searchNumbers.forEach((n) => {
      result.push(binarySearch(n, numbers, 0, N - 1));
    });

    console.log(result.join("\n"));
  });

const quickSort = (numbers, start, end) => {
  if (start >= end) {
    return;
  }
  const pivot = start;
  let left = start + 1,
    right = end;
  while (left <= right) {
    while (left <= end && numbers[left] <= numbers[pivot]) {
      left++;
    }
    while (right > start && numbers[right] >= numbers[pivot]) {
      right--;
    }
    if (left <= right) {
      let temp = numbers[left];
      numbers[left] = numbers[right];
      numbers[right] = temp;
    } else {
      let temp = numbers[right];
      numbers[right] = numbers[pivot];
      numbers[pivot] = temp;
    }
  }
  quickSort(numbers, start, right - 1);
  quickSort(numbers, right + 1, end);
};

const binarySearch = (num, numbers, startIndex, endIndex) => {
  if (endIndex < startIndex) {
    return 0;
  }
  if (endIndex === startIndex) {
    return num === numbers[startIndex] ? 1 : 0;
  }

  const pivotIndex = Math.floor((endIndex + startIndex) / 2);
  if (num === numbers[pivotIndex]) {
    return 1;
  }
  return num > numbers[pivotIndex]
    ? binarySearch(num, numbers, pivotIndex + 1, endIndex)
    : binarySearch(num, numbers, startIndex, pivotIndex - 1);
};
