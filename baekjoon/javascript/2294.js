const input = [];
const INF = 987654321;
let n, k, coinValues, cache;

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    [n, k] = strToNumArr(input.shift());
    coinValues = input.map(Number);
    cache = Array(k + 1).fill(INF);

    cache[0] = 0;
    coinValues.forEach((coinValue) => {
      for (let j = coinValue; j <= k; j++) {
        if (cache[j - coinValue] !== INF) {
          cache[j] = Math.min(cache[j], cache[j - coinValue] + 1);
        }
      }
    });

    console.log(cache[k] === INF ? -1 : cache[k]);
  });
