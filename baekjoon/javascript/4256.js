const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let inputIndex = 0;
    const t = +input[inputIndex++];
    const results = [...Array(t)].map(() => []);

    for (let i = 0; i < t; i++) {
      const N = +input[inputIndex++];
      const preOrderResult = input[inputIndex++].split(" ");
      const inOrderResult = input[inputIndex++].split(" ");
      postOrder({
        postOrderResult: results[i],
        preOrderResult,
        preOrderRoot: 0,
        inOrderResult,
        start: 0,
        end: N,
      });
    }

    console.log(results.map((arr) => arr.join(" ")).join("\n"));

    function postOrder({
      postOrderResult,
      preOrderResult,
      preOrderRoot,
      inOrderResult,
      start,
      end,
    }) {
      let inOrderRoot = -1;
      for (let i = start; i < end; i++) {
        if (inOrderResult[i] === preOrderResult[preOrderRoot]) {
          inOrderRoot = i;
          break;
        }
      }
      if (inOrderRoot === -1) {
        return;
      }
      postOrder({
        postOrderResult,
        preOrderResult,
        preOrderRoot: preOrderRoot + 1,
        inOrderResult,
        start,
        end: inOrderRoot,
      });
      postOrder({
        postOrderResult,
        preOrderResult,
        preOrderRoot: preOrderRoot + inOrderRoot - start + 1,
        inOrderResult,
        start: inOrderRoot + 1,
        end,
      });
      postOrderResult.push(inOrderResult[inOrderRoot]);
    }
  });
