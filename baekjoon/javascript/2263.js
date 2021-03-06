const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input[0]);
    const inOrderList = strToNumArr(input[1]);
    const postOrderList = strToNumArr(input[2]);
    const result = [];

    const callStack = [[0, N-1, 0, N-1]];
    while(callStack.length){
        const [inStart, inEnd, postStart, postEnd] = callStack.pop();
        if (inStart > inEnd || postStart > postEnd) {
          continue;
        }
        const root = postOrderList[postEnd];
        result.push(root);
        let inRootIndex;
        for (let i = inStart; i <= inEnd; i++) {
          if (inOrderList[i] === root) {
            inRootIndex = i;
            break;
          }
        }
        const postLeftEnd = postStart + (inRootIndex - 1 - inStart);
        callStack.push([inRootIndex + 1, inEnd, postLeftEnd + 1, postEnd - 1]);
        callStack.push([inStart, inRootIndex - 1, postStart, postLeftEnd]);
    }

    console.log(result.join(" "));
  });
