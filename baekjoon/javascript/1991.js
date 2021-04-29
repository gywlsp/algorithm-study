//https://www.acmicpc.net/problem/1991

const input = [];

const binaryTree = {};
const result = ["", "", ""];

const traverse = (root, order) => {
  const { left, right } = binaryTree[root];

  if (order === "pre") {
    result[0] += root;
  }
  if (left) {
    traverse(left, order);
  }
  if (order === "in") {
    result[1] += root;
  }
  if (right) {
    traverse(right, order);
  }
  if (order === "post") {
    result[2] += root;
  }
  if (!(left || right)) return;
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    input.splice(0, 1);
    input.forEach((str) => {
      const [key, left, right] = str
        .split(" ")
        .map((alphabet) => (alphabet === "." ? null : alphabet));
      binaryTree[key] = { left, right };
    });

    traverse("A", "pre");
    traverse("A", "in");
    traverse("A", "post");

    result.forEach((str) => {
      console.log(str);
    });
  });
