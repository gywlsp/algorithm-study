//https://www.acmicpc.net/problem/1987

const input = [];
let graph, R, C;
let result = 0;
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    [R, C] = strToNumArr(input.shift());
    graph = input.map((str) => str.split(""));
    dfs(0, 0, graph[0][0]);
    console.log(result);
  });

const dfs = (currR, currC, alphabets) => {
  for (let i = 0; i < 4; i++) {
    const [nextR, nextC] = [currR + dr[i], currC + dc[i]];
    if (
      nextR < 0 ||
      nextR >= R ||
      nextC < 0 ||
      nextC >= C ||
      alphabets.includes(graph[nextR][nextC])
    ) {
      result = Math.max(result, alphabets.length);
      continue;
    }
    dfs(nextR, nextC, alphabets + graph[nextR][nextC]);
  }
};
