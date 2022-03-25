const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const numbers = input[1]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    let left = 0,
      right = numbers.length - 1,
      absSum = Number.MAX_SAFE_INTEGER,
      result = "";
    while (left < right) {
      const leftNum = numbers[left];
      const rightNum = numbers[right];
      const sum = leftNum + rightNum;
      if (Math.abs(sum) < absSum) {
        absSum = Math.abs(sum);
        result = `${leftNum} ${rightNum}`;
      }
      if (sum < 0) left++;
      else right--;
    }
    console.log(result);
  });
