//https://www.acmicpc.net/problem/9095

const input = [];

const memo = [...Array(11)];

const write = (num) => {
  memo[num] = memo[num - 1] + memo[num - 2] + memo[num - 3];
};

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 4;

    for (let i = 4; i <= 10; i++) {
      write(i);
    }

    input.splice(0, 1);
    input.forEach((numString) => {
      console.log(memo[Number(numString)]);
    });
  });