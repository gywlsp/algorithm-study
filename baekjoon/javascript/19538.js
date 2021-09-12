//https://www.acmicpc.net/problem/19538

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let i = 0;
    const N = +input[i++];
    const distributors = input[N + 2].split(" ").map(Number);
    const result = Array(N + 1).fill(-1);
    const adjList = Array(N + 1).fill(null);
    const turn = Array(N + 1).fill(0);
    for (i; i <= N; i++) {
      adjList[i] = [];
      input[i].split(" ").forEach((v) => {
        const n = Number(v);
        if (n) {
          adjList[i].push(n);
        }
      });
      turn[i] = Math.ceil(adjList[i].length / 2);
    }
    distributors.forEach((v) => {
      result[v] = 0;
    });

    let t = 1;
    while (distributors.length) {
      const curr = distributors.shift();
      adjList[curr].forEach((next) => {
        turn[next] -= 1;
        if (result[next] === -1 && turn[next] <= 0) {
          distributors.push(next);
          result[next] = result[curr] + 1;
        }
      });
    }
    result.splice(0, 1);
    console.log(result.join(" "));
  });
