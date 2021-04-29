//https://www.acmicpc.net/problem/14502

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M] = strToNumArr(input.shift());
    const visited = Array(N).fill(false);
    const graph = visited.map(() => []);
    const connectedV = new Set();
    input.forEach((str) => {
      const [u, v] = strToNumArr(str);
      graph[u - 1].push(v - 1);
      graph[v - 1].push(u - 1);
      connectedV.add(v - 1);
      connectedV.add(u - 1);
    });

    let count = 0;
    for (let i = 0; i < N; i++) {
      let start;
      for (let j = i; j < N; j++) {
        if (graph[j].length && !visited[j]) {
          start = j;
          break;
        }
      }
      if (start === undefined) {
        break;
      }

      count++;
      const queue = [start];
      visited[start] = true;
      while (queue.length) {
        const node = queue.shift();
        graph[node].forEach((next) => {
          if (visited[next]) {
            return;
          }
          visited[next] = true;
          queue.push(next);
        });
      }
    }

    console.log(count + (N - connectedV.size));
  });
