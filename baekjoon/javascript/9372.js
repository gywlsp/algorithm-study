const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const result = [];
    let inputIndex = 0;
    let t = strToNumArr(input[inputIndex++]);
    while (t--) {
      const [N, M] = strToNumArr(input[inputIndex++]);
      const graph = [];
      for (let i = 0; i <= N; i++) {
        graph.push([]);
      }
      for (let j = 0; j < M; j++) {
        const [a, b] = strToNumArr(input[inputIndex++]);
        graph[a].push(b);
        graph[b].push(a);
      }
      const visited = Array(N + 1).fill(false);

      let edgeCount = 0;
      const queue = [1];
      visited[1] = true;
      while (queue.length) {
        const node = queue.shift();
        graph[node].forEach((v) => {
          if (visited[v]) {
            return;
          }
          visited[v] = true;
          queue.push(v);
          edgeCount++;
        });
      }
      result.push(edgeCount);
    }
    console.log(result.join("\n"));
  });
