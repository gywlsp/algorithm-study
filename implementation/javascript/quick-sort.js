const numbers = [1, 11, 2, 33, 4];

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

console.log(numbers);
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
