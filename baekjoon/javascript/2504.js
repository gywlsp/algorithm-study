//https://www.acmicpc.net/problem/2504

const input = [];
const stack = [];

const parseBracket = (bracket) => {
  const bracketPair = bracket === ")" ? "(" : "[";
  const lastStackElement = stack.pop();

  if (lastStackElement === bracketPair) {
    stack.push(bracketPair === "(" ? 2 : 3);
    return true;
  }
  if (typeof lastStackElement === "number") {
    let temp = lastStackElement;
    let t = stack.length;
    while (t--) {
      const lastStackElement = stack.pop();
      if (lastStackElement === bracketPair) {
        stack.push(temp * (bracketPair === "(" ? 2 : 3));
        return true;
      } else if (typeof lastStackElement === "number") {
        temp += lastStackElement;
        continue;
      } else {
        return false;
      }
    }
  }
  return false;
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const bracketList = input[0].split("");
    let i = 0;
    do {
      const bracket = bracketList[i];
      if (bracket === "(" || bracket === "[") stack.push(bracket);
      else {
        if (!parseBracket(bracket)) {
          console.log(0);
          break;
        }
      }
      i++;

      if (i === bracketList.length) {
        if (stack.length > 0 && !stack.find((e) => typeof e === "string"))
          console.log(stack.reduce((acc, curr) => acc + curr));
        else console.log(0);
      }
    } while (i < bracketList.length);
  });
