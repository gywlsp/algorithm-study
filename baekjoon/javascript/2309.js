//https://www.acmicpc.net/problem/2309

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let totalHeight = 0;
    const HEIGHT_LIST = input.map((str) => {
      totalHeight += Number(str);
      return Number(str);
    });

    const NO_DWARFS_HEIGHT_SUM = totalHeight - 100;
    let noDwarfIndexList;
    for (let i = 0; i < HEIGHT_LIST.length; i++) {
      for (let j = i + 1; j < HEIGHT_LIST.length; j++) {
        if (HEIGHT_LIST[i] + HEIGHT_LIST[j] !== NO_DWARFS_HEIGHT_SUM) {
          continue;
        }
        noDwarfIndexList = [i, j];
        break;
      }
    }

    const result = HEIGHT_LIST.filter(
      (_, i) => !noDwarfIndexList.includes(i)
    ).sort((a, b) => a - b);

    console.log(result.join("\n"));
  });
