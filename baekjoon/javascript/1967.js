//https://www.acmicpc.net/problem/1967

const input = [];
let tree;
let longest = 0;

const strToNumArr = (str) =>
  str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input.shift());
    tree = [...Array(N + 1)].map(() => []);
    let parent, child, len;
    input.forEach((str) => {
      [parent, child, len] = strToNumArr(str);
      tree[parent].push([child, len]);
    });

    const height = getHeight(1);
    console.log(Math.max(height, longest));
  });

const getHeight = (root) => {
  const subTrees = tree[root].map(([node, value]) => [
    node,
    getHeight(node),
    value,
  ]);
  subTrees.sort((a, b) => (b[1] + b[2]) - (a[1] + a[2]));

  if (subTrees.length === 0) {
    return 0;
  }
  if (subTrees.length >= 2) {
    longest = Math.max(
      longest,
      subTrees[0][1] + subTrees[0][2] + subTrees[1][1] + subTrees[1][2]
    );
  }
  return subTrees[0][1] + subTrees[0][2];
};
