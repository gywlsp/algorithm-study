//https://www.acmicpc.net/problem/1260

const input = [];
let graph, visited, result;

const strToNumArr = (str) => str.split(" ").map(Number);

const dfs = (v) => {
  if (visited[v]) {
    return;
  }

  visited[v] = true;
  result.push(v);
  graph[v].forEach((vertex) => {
    if (!visited[vertex]) {
      dfs(vertex);
    }
  });
};

const bfs = (vStart) => {
  const willVisit = [vStart];
  let v;
  while (willVisit.length !== 0) {
    v = willVisit.shift();
    if (visited[v]) {
      continue;
    }

    visited[v] = true;
    result.push(v);
    graph[v].forEach((vertex) => {
      if (!visited[vertex]) {
        willVisit.push(vertex);
      }
    });
  }
};

const insertEdge = (vFront, vBack) => {
  let index;
  for (index = 0; index < graph[vFront].length; index++) {
    if (graph[vFront][index] < vBack) {
      continue;
    }

    if (graph[vFront][index] === vBack) {
      index = null;
    }
    break;
  }

  if (index !== null) {
    graph[vFront].splice(index, 0, vBack);
  }
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M, V] = strToNumArr(input.shift());
    graph = [...Array(N + 1)].map(() => []);
    visited = [...Array(N + 1)].fill(false);
    let v1, v2;
    input.forEach((str) => {
      [v1, v2] = strToNumArr(str);
      insertEdge(v1, v2);
      insertEdge(v2, v1);
    });

    result = [];
    dfs(V);
    console.log(result.join(" "));

    visited.fill(false);
    result = [];
    bfs(V);
    console.log(result.join(" "));
  });
