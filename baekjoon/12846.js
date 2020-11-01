//https://www.acmicpc.net/problem/12846

let input = [];
const stack = [];
let result = 0;
let temp, temp_start_index;
let stack_top_index, stack_top_pay;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    const DAILY_PAY_LIST = strToNumArr(input[1]);
    for(let i=0; i<N; i++){
      const today_pay = DAILY_PAY_LIST[i];
      if(stack.length===0){
        stack.push([i, today_pay]);
        continue;
      }

      [stack_top_index, stack_top_pay] = stack[stack.length-1];
      if(stack_top_pay < today_pay){
        stack.push([i, today_pay]);
        continue;
      }
      if(stack_top_pay > today_pay){
        while(stack.length !== 0 && stack_top_pay > today_pay){
          [stack_top_index, stack_top_pay] = stack[stack.length-1];
          temp = stack_top_pay * (i-stack_top_index);
          temp_start_index = stack_top_index;
          if(temp > result) result = temp;
          stack.pop();
        }
        stack.push([temp_start_index, today_pay]);
      }
    }
    
    while(stack.length!==0){
      [stack_top_index, stack_top_pay] = stack[stack.length-1];
      temp = stack_top_pay * (N-stack_top_index);
      if(temp>result) result=temp;
      stack.pop();
    }
    console.log(result);
  });
