//https://www.acmicpc.net/problem/14501

const input = [];
let dDay, schedule, memo;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    dDay = Number(input.shift());
    schedule = input.map((str)=>strToNumArr(str));
    memo = [...Array(dDay)];

    console.log(getMaxPay(0));
  });

const getMaxPay = (n) => {
    if(n>=dDay){
        return 0;
    }
    if(memo[n]!==undefined){
        return memo[n];
    }

    const [t, p] = schedule[n];
    memo[n] = Math.max(getMaxPay(n+1), n+t-1<dDay? p+getMaxPay(n+t): getMaxPay(n+t));
    return memo[n];
};
