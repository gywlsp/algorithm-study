//https://www.acmicpc.net/problem/1753

const input = [],
  graph = [];
let visited, distances;
const INF = 987654321;

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [V, _] = strToNumArr(input.shift());
    const start = Number(input.shift());

    for (let i = 0; i < V; i++) {
      graph.push([]);
    }
    visited = Array(V).fill(false);
    distances = Array(V).fill(INF);

    let u, v, w;
    input.forEach((str) => {
      [u, v, w] = strToNumArr(str);
      graph[u - 1].push([w, v - 1]);
    });

    dijkstra(start - 1);

    distances.forEach((d, i) => {
      if (d === INF) {
        distances[i] = "INF";
      }
    });
    console.log(distances.join("\n"));
  });

const dijkstra = (vStart) => {
  distances[vStart] = 0;

  while (true) {
    let shortestD = INF,
      closestV;
    for (let i = 0; i < distances.length; ++i) {
      if (distances[i] < shortestD && !visited[i]) {
        shortestD = distances[i];
        closestV = i;
      }
    }

    if (shortestD === INF) {
      break;
    }

    visited[closestV] = true;
    let w, v;
    graph[closestV].forEach((node) => {
      [w, v] = node;
      if (visited[v]) {
        return;
      }
      distances[v] = Math.min(distances[v], distances[closestV] + w);
    });
  }
};
