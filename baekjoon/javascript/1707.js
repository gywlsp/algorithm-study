const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let inputIndex = 0;
    let t = input[inputIndex++];
    const result = [];
    while (t--) {
      const [V, E] = strToNumArr(input[inputIndex++]);
      const graph = [];
      for (let i = 0; i <= V; i++) {
        graph.push([]);
      }
      for (let i = 0; i < E; i++) {
        const [u, v] = strToNumArr(input[inputIndex++]);
        graph[u].push(v);
        graph[v].push(u);
      }
      const nodeColors = Array(V + 1).fill(0);
      for (let v = 1; v <= V; v++) {
        if (nodeColors[v]) {
          continue;
        }
        dfs(graph, v, nodeColors);
      }
      result.push(isBipartiteGraph(graph, nodeColors) ? "YES" : "NO");
    }
    console.log(result.join("\n"));
  });

const dfs = (graph, start, nodeColors) => {
  const callStack = [[start, 1]];
  while (callStack.length) {
    const [v, color] = callStack.pop();
    if (nodeColors[v]) {
      continue;
    }
    nodeColors[v] = color;
    graph[v].forEach((u) => {
      if (!nodeColors[u]) {
        callStack.push([u, 3 - color]);
      }
    });
  }
};

const isBipartiteGraph = (graph, nodeColors) => {
  for (let v = 1; v <= graph.length - 1; v++) {
    for (let i = 0; i < graph[v].length; i++) {
      const u = graph[v][i];
      if (nodeColors[v] === nodeColors[u]) {
        return false;
      }
    }
  }
  return true;
};
