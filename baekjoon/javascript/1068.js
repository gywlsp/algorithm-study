const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input[0];
    const childrenList = [...Array(N)].map(() => []);
    let root = -1;
    input[1].split(" ").forEach((v, child) => {
      const parent = +v;
      if (parent === -1) {
        root = child;
        return;
      }
      childrenList[parent].push(child);
    });
    const nodeToBeRemoved = +input[2];
    let leafCnt = 0;

    const dfs = (curr) => {
      if (curr === nodeToBeRemoved) return;
      let childrenLen = childrenList[curr].length;
      childrenList[curr].forEach((next) => {
        dfs(next);
        if (next === nodeToBeRemoved) childrenLen -= 1;
      });
      if (!childrenLen) {
        leafCnt++;
        return;
      }
    };

    dfs(root);
    console.log(leafCnt);
  });
