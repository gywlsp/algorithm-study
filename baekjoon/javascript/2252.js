const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M] = strToNumArr(input.shift());
    const graph = [];
    for (let i = 0; i <= N; i++) {
      graph.push([]);
    }
    const inDegrees = Array(N + 1).fill(0);

    input.forEach((str) => {
      const [prev, next] = strToNumArr(str);
      graph[prev].push(next);
      inDegrees[next] += 1;
    });

    const queue = [];
    for (let n = 1; n <= N; n++) {
      if (!inDegrees[n]) {
        queue.push(n);
      }
    }

    const result = [];
    while (queue.length) {
      const n = queue.pop();
      result.push(n);
      graph[n].forEach((v) => {
        inDegrees[v] -= 1;
        if (!inDegrees[v]) {
          queue.push(v);
        }
      });
    }

    console.log(result.join(" "));
  });
