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
        root: 0,
        inOrderResult,
        start: 0,
        end: N,
      });
    }

    console.log(results.map((arr) => arr.join(" ")).join("\n"));

    function postOrder({
      postOrderResult,
      preOrderResult,
      root,
      inOrderResult,
      start,
      end,
    }) {
      for (let i = start; i < end; i++) {
        if (inOrderResult[i] !== preOrderResult[root]) continue;
        postOrder({
          postOrderResult,
          preOrderResult,
          root: root + 1,
          inOrderResult,
          start,
          end: i,
        });
        postOrder({
          postOrderResult,
          preOrderResult,
          root: root + 1 + i - start,
          inOrderResult,
          start: i + 1,
          end,
        });
        postOrderResult.push(inOrderResult[i]);
      }
    }
  });
