const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    str = input[0];
    let cnt = 0,
      result = 0;
    for (let i = 0; i <= str.length; i++) {
      if (str[i] === "O") {
        result += ++cnt;
      } else {
        cnt = 0;
      }
    }
    console.log(result);
  });
