function solution(name) {
  const nameCharList = name.split("");
  if (!nameCharList.find((v) => v !== "A")) {
    return 0;
  }
  let result = Number.MAX_SAFE_INTEGER;
  const len = nameCharList.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const leftMoved = name.slice(len - i) + name.slice(0, len - i);
    const rightMoved = name.slice(i) + name.slice(0, i);
    [
      leftMoved,
      rightMoved[0] + rightMoved.slice(1).split("").reverse().join(""),
    ].forEach((path) => {
      for (let j = path.length - 1; j >= 0; j--) {
        if (path[j] !== "A") {
          break;
        }
        path = path.slice(0, j);
      }
      let moveCnt = i + path.length - 1;
      moveCnt += path
        .split("")
        .reduce(
          (prev, curr) =>
            prev + Math.min(curr.charCodeAt(0) - 65, 91 - curr.charCodeAt(0)),
          0
        );

      result = Math.min(result, moveCnt);
    });
  }
  return result;
}
