//https://www.acmicpc.net/problem/1316

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = +input.shift();
    let groupWordCount = 0;
    input.forEach((str) => {
      const charList = str.split("");
      const charTypes = [];
      let i;
      for (i = 0; i < charList.length; i++) {
        const charIndex = charTypes.indexOf(charList[i]);
        if (charIndex === -1) {
          charTypes.push(charList[i]);
        } else if (charIndex === charTypes.length - 1) {
          continue;
        } else {
          break;
        }
      }
      if (i === charList.length) {
        groupWordCount++;
      }
    });
    console.log(groupWordCount);
  });
