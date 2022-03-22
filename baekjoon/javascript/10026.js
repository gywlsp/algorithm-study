const input = [];
const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input.shift();
    const graph = input.map((str) => str.split(""));
    const visited = graph.map((arr) => arr.map(() => false));
    const results = [];
    results.push(solve(graph, visited));
    graph.forEach((arr, r) =>
      arr.forEach((color, c) => {
        if (color === "G") {
          graph[r][c] = "R";
        }
      })
    );
    visited.forEach((arr) => {
      arr.fill(false);
    });
    results.push(solve(graph, visited));
    console.log(results.join(" "));
  });

const solve = (graph, visited) => {
  let result = 0;
  while (true) {
    const [r, c] = getStartNode(graph, visited);
    if (r === -1 && c === -1) {
      break;
    }
    result++;
    dfs({ graph, curr: [r, c], visited });
  }
  return result;
};

const getStartNode = (graph, visited) => {
  let r = -1,
    c = -1;
  for (let i = 0; i < graph.length; i++) {
    const j = visited[i].findIndex((v) => !v);
    if (j === -1) {
      continue;
    }
    r = i;
    c = j;
    break;
  }
  return [r, c];
};

const dfs = ({ graph, curr, visited }) => {
  const [r, c] = curr;
  visited[r][c] = true;
  for (let i = 0; i < 4; i++) {
    const nextR = r + dr[i],
      nextC = c + dc[i];
    if (
      nextR < 0 ||
      nextR >= graph.length ||
      nextC < 0 ||
      nextC >= graph.length ||
      graph[nextR][nextC] !== graph[r][c] ||
      visited[nextR][nextC]
    ) {
      continue;
    }
    dfs({ graph, curr: [nextR, nextC], visited });
  }
};
