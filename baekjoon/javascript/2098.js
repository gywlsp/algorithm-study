const input = [];

let n, allVisit, graph, costMemo;
const INF = 987654321;
const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    n = Number(input.shift());
    allVisit = (1 << n) - 1;
    costMemo = [];
    for (let v = 0; v < n; v++) {
      costMemo.push(Array(allVisit + 1).fill(-1));
    }
    graph = input.map(strToNumArr);
    console.log(getMinCost(0, 1 << 0));
  });

const getMinCost = (city, visitState) => {
  if (visitState === allVisit) {
    return graph[city][0] || INF;
  }
  if (costMemo[city][visitState] !== -1) {
    return costMemo[city][visitState];
  }
  let minCost = INF;
  for (let i = 0; i < n; i++) {
    if (!graph[city][i] || visitState & (1 << i)) {
      continue;
    }
    minCost = Math.min(
      minCost,
      getMinCost(i, visitState | (1 << i)) + graph[city][i]
    );
  }
  return (costMemo[city][visitState] = minCost);
};
