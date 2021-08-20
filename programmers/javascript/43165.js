function solution(numbers, target) {
  let answer = 0;
  for (let i = 0; i < 1 << numbers.length; i++) {
    let iBinaryStr = i.toString(2);
    let t = numbers.length - iBinaryStr.length;
    while (t--) {
      iBinaryStr = "0" + iBinaryStr;
    }
    let evalStr = "";
    numbers.forEach((n, i) => {
      evalStr = (iBinaryStr[i] === "1" ? "+" : "-") + n + evalStr;
    });
    if (eval(evalStr) === target) {
      answer++;
    }
  }
  return answer;
}
