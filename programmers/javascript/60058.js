function solution(p) {
  const result = getCorrected(p);
  return result;
}

function getCorrected(_str) {
  let str = _str,
    result = "";
  while (str.length) {
    const [u, v] = divide(str);
    if (isCorrect(u)) {
      result += u;
      str = v;
      continue;
    }
    result += "(" + getCorrected(v) + ")";
    for (let i = 1; i < u.length - 1; i++) {
      result += u[i] === "(" ? ")" : "(";
    }
    break;
  }
  return result;
}

function divide(str) {
  let leftCnt = 0,
    rightCnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      leftCnt++;
    } else {
      rightCnt++;
    }
    if (leftCnt === rightCnt) break;
  }
  const p = leftCnt + rightCnt;
  return [str.slice(0, p), str.slice(p)];
}

function isCorrect(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (stack[stack.length - 1] === "(") {
      stack.pop();
    }
  }
  return !stack.length;
}
