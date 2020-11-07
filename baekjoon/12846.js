//https://www.acmicpc.net/problem/12846

let input = [];
let result = 0;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    const DAILY_PAY_LIST = strToNumArr(input[1]);

    let todayPay, day, dailyPay;
    DAILY_PAY_LIST.push(0);
    const stack = [[0, DAILY_PAY_LIST[0]]];

    for(let i=1; i<=N; i++){
      todayPay = DAILY_PAY_LIST[i];
      while(stack.length!==0 && stack[stack.length-1][1]>todayPay){
        [day, dailyPay] = stack.pop();
        result = Math.max(result, dailyPay*(i-day));
      }
      stack.push([i, todayPay]);
    }

    console.log(result);
  });
