//https://www.acmicpc.net/problem/1463

const input = [];
let memo;

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    memo = [...Array(N+1)];

    memo[1] = 0;
    memo[2] = 1;

    for(let i=3; i<=N; i++){
        prevNumbers = [i-1];
        if(i%2===0) {prevNumbers.push(i/2);}
        if(i%3===0) {prevNumbers.push(i/3);}

        memo[i] = Math.min(...prevNumbers.map(num => memo[num]))+1;
    }
    
    console.log(memo[N]);
  });
