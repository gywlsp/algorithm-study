//https://www.acmicpc.net/problem/6603

const input = [];

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

const getCombinations = function (arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index) => {
    const rest = arr.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let t = input.length - 1;
    let inputIndex = 0;
    while (t--) {
      const [n, ...numList] = strToNumArr(input[inputIndex++]);
      getCombinations(numList, 6).forEach((numList) =>
        console.log(numList.join(" "))
      );
      console.log("");
    }
  });
