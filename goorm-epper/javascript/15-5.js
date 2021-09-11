const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const str = input[0];
    const base = "A".charCodeAt(0) - 1;
    let char = str[0],
      cnt = 0;
    let result = char === "0" ? "" : "1";
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      if (c !== char) {
        result += String.fromCharCode(base + cnt);
        char = c;
        cnt = 0;
      }
      cnt++;
    }
    result += String.fromCharCode(base + cnt);
    console.log(result);
    process.exit();
  });
