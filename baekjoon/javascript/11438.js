const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);
const graph = [],
  depth = [],
  ancestor = [];
LOG = 21;
let n;

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let inputIndex = 0;
    n = Number(input[inputIndex++]);
    for (let i = 0; i <= n; i++) {
      graph.push([]);
      depth.push(-1);
      ancestor.push(Array(LOG).fill(0));
    }

    let t = n - 1;
    while (t--) {
      const [a, b] = strToNumArr(input[inputIndex++]);
      graph[a].push(b);
      graph[b].push(a);
    }

    setDepth();
    setAncestors();

    const M = Number(input[inputIndex++]),
      result = [];
    t = M;
    while (t--) {
      const [a, b] = strToNumArr(input[inputIndex++]);
      result.push(lca(a, b));
    }
    console.log(result.join("\n"));
  });

const setDepth = () => {
  const callStack = [[1, 0]];
  while (callStack.length) {
    const [u, d] = callStack.pop();
    depth[u] = d;
    graph[u].forEach((v) => {
      if (depth[v] !== -1) {
        return;
      }
      ancestor[v][0] = u;
      callStack.push([v, d + 1]);
    });
  }
};

const setAncestors = () => {
  for (let i = 1; i < LOG; i++) {
    for (let j = 1; j <= n; j++) {
      ancestor[j][i] = ancestor[ancestor[j][i - 1]][i - 1];
    }
  }
};

const lca = (a, b) => {
  if (depth[a] > depth[b]) {
    let temp = a;
    a = b;
    b = temp;
  }
  for (let i = LOG - 1; i >= 0; i--) {
    if (depth[b] - depth[a] >= 1 << i) {
      b = ancestor[b][i];
    }
  }
  if (a === b) {
    return a;
  }
  for (let i = LOG - 1; i >= 0; i--) {
    if (ancestor[a][i] !== ancestor[b][i]) {
      a = ancestor[a][i];
      b = ancestor[b][i];
    }
  }
  return ancestor[a][0];
};
