const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const result = input[0].split(" ").filter((v) => v).length;
    console.log(result);
  });
