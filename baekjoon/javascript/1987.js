//https://www.acmicpc.net/problem/1987

const input = [];
const strToNumArr = (str) => str.split(" ").map(Number);

let graph,
  R,
  C,
  len = 1,
  result = 1;
const visited = Array(26).fill(false);
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    [R, C] = strToNumArr(input.shift());
    graph = input.map((str) =>
      str.split("").map((alphabet) => alphabet.charCodeAt(0) - 65)
    );

    dfs(0, 0);
    console.log(result);
  });

const dfs = (currR, currC) => {
  const curr = graph[currR][currC];
  visited[curr] = true;

  for (let i = 0; i < 4; i++) {
    const nextR = currR + dr[i];
    const nextC = currC + dc[i];
    if (
      nextR < 0 ||
      nextR >= R ||
      nextC < 0 ||
      nextC >= C ||
      visited[graph[nextR][nextC]]
    ) {
      continue;
    }
    result = Math.max(result, ++len);
    dfs(nextR, nextC);
  }

  --len;
  visited[curr] = false;
};
