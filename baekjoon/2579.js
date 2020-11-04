//https://www.acmicpc.net/problem/2759

let input = [];
let inputIndex = 0;
let numbers = [];
let memo;

const solve = (i) => {
    if (i < 0) return 0;
  
    if (memo[i]) {
      return memo[i];
    }
  
    memo[i] = numbers[i] + Math.max(solve(i - 2), numbers[i - 1] + solve(i - 3));
    return memo[i];
};


require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[inputIndex++]);
    memo = Array.apply(null, Array(N));

    let t = N;
    while (t--) numbers.push(Number(input[inputIndex++]));

    memo[0] = numbers[0];
    solve(N - 1);
    
    console.log(memo[N - 1]);
  });
