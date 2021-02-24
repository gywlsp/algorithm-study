//https://www.acmicpc.net/problem/10816

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const numList = strToNumArr(input[1]);
    const findList = strToNumArr(input[3]);

    const numCountMap = new Map();
    numList.forEach((num) => {
      if (!numCountMap.get(num)) {
        numCountMap.set(num, 0);
      }
      numCountMap.set(num, numCountMap.get(num) + 1);
    });

    const result = findList.map((num) => {
      const count = numCountMap.get(num);
      return count || 0;
    });
    console.log(result.join(" "));
  });
