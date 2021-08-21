function solution(numbers, target) {
  let answer = 0;
  const evalCases = (sum, i) => {
    if (i === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    const number = numbers[i];
    evalCases(sum + number, i + 1);
    evalCases(sum - number, i + 1);
  };
  evalCases(0, 0);
  return answer;
}
