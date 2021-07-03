const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let t = input.length;
    while (t--) {
      const [S, T] = input.shift().split(" ");
      const sArr = S.split("");
      const tArr = T.split("");
      let i = 0;
      for (let j = 0; j < tArr.length; j++) {
        if (sArr[i] === tArr[j]) {
          i++;
        }
        if (i === sArr.length) {
          break;
        }
      }
      console.log(i === sArr.length ? "Yes" : "No");
    }
  });
