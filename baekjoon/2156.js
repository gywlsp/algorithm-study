//https://www.acmicpc.net/problem/2156

let input = [];

const setMaxAmount = (amount_list, dp, i) => {
    dp[i] = Math.max(
      amount_list[i]+amount_list[i-1]+(i===2? 0 : dp[i-3]),
      amount_list[i]+dp[i-2],
      dp[i-1]
    );
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, ...amount_list] = input.map(numString => Number(numString));
    const dp = amount_list.map(()=>0);
    
    dp[0] = amount_list[0];
    dp[1] = amount_list[0]+amount_list[1];

    for(let i=2; i<N; i++){
        setMaxAmount(amount_list, dp, i);
    }
    
    console.log(dp[N-1]);
  });
