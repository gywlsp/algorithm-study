//https://www.acmicpc.net/problem/1967

const input = [];
let n, graph, dist;

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    n = Number(input.shift());
    graph = [...Array(n + 1)].map(() => []);
    let u, v, w;
    input.forEach((str) => {
      [u, v, w] = strToNumArr(str);
      graph[u].push([v, w]);
      graph[v].push([u, w]);
    });
    const height = getMaxDist(1);
    const farthest = dist.indexOf(height);
    const diameter = getMaxDist(farthest);
    console.log(diameter);
  });

const getMaxDist = (from) => {
  const queue = [from];
  dist = Array(n + 1).fill(-1);
  dist[from] = 0;

  while (queue.length) {
    const u = queue.shift();
    graph[u].forEach(([v, w]) => {
      if (dist[v] === -1) {
        dist[v] = dist[u] + w;
        queue.push(v);
      }
    });
  }
  return Math.max(...dist);
};
