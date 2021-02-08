//https://www.acmicpc.net/problem/2839

const input = [];
const INF = 987654321;
let memo;

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    memo = [0, ...Array(N)];
    const result = getMinBagCount(N);
    console.log(result>INF ? -1 : result);
  });

const getMinBagCount = (n) => {
    if(memo[n]!==undefined){
        return memo[n];
    }

    if(n<3){
        return INF;
    }

    memo[n] = 1 + Math.min(getMinBagCount(n-3), getMinBagCount(n-5));
    return memo[n];
};
