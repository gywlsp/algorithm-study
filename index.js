//기본 양식

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
    /*
    1
    2 3
    4 5 6
    콘솔창을 통해 위와 같은 입력이 들어왔을 때,
    input에 ['1', '2 3', '4 5 6']이 저장된다.
    */
  })
  .on("close", function () {});
