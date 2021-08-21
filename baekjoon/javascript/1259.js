//https://www.acmicpc.net/problem/1259

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    input.forEach((n) => {
      if (n === "0") {
        return;
      }
      const nArr = n.split("");
      const nLen = n.length;
      const t = Math.floor(nLen / 2);
      for (let i = 0; i < t; i++) {
        if (nArr[i] !== nArr[nLen - 1 - i]) {
          console.log("no");
          return;
        }
      }
      console.log("yes");
    });
  });
