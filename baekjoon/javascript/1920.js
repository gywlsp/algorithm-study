const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const NUMBERS = input[1]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    const result = input[3]
      .split(" ")
      .map((n) => isIncluded(NUMBERS, +n, 0, NUMBERS.length - 1));
    console.log(result.join("\n"));
  });

const isIncluded = (numbers, target, start, end) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (numbers[mid] === target) {
      return 1;
    } else if (numbers[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
};
