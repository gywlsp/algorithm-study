const input = [],
  words = [];

function solution(zr, zc, words) {
  let answer = [];

  //코드를 작성해주세요.
  words.forEach((word) => {
    let str = "";
    word.forEach((char) => {
      for (let t = 0; t < zc; t++) {
        str += char;
      }
    });
    for (let t = 0; t < zr; t++) {
      answer.push(str);
    }
  });

  return answer;
}

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [r, c, zr, zc] = input[0].split(" ");
    for (let i = 1; i <= r; i++) {
      words.push(input[i].split(""));
    }

    const answer = solution(zr, zc, words);
    console.log(answer.join("\n"));
    process.exit();
  });
