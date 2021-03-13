const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);
const graph = [],
  depth = [],
  parent = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let inputIndex = 0;
    const N = Number(input[inputIndex++]);
    for (let i = 0; i <= N; i++) {
      graph.push([]);
      depth.push(-1);
      parent.push(-1);
    }

    let t = N - 1;
    while (t--) {
      const [a, b] = strToNumArr(input[inputIndex++]);
      graph[a].push(b);
      graph[b].push(a);
    }

    dfs(1, 0);

    const M = Number(input[inputIndex++]),
      result = [];
    t = M;
    while (t--) {
      const [a, b] = strToNumArr(input[inputIndex++]);
      result.push(lca(a, b));
    }
    console.log(result.join("\n"));
  });

const dfs = (u, d) => {
  const callStack = [[u, d]];
  while (callStack.length) {
    const [u, d] = callStack.pop();
    depth[u] = d;
    graph[u].forEach((v) => {
      if (depth[v] !== -1) {
        return;
      }
      parent[v] = u;
      callStack.push([v, d + 1]);
    });
  }
};

const lca = (a, b) => {
  while (depth[a] !== depth[b]) {
    if (depth[a] > depth[b]) {
      a = parent[a];
    } else {
      b = parent[b];
    }
  }
  while (a !== b) {
    a = parent[a];
    b = parent[b];
  }
  return a;
};
