function solution(answers) {
  const rules = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const rightCounts = [0, 0, 0];
  answers.forEach((answer, aIndex) => {
    rules.forEach((rule, person) => {
      const _answer = rule[aIndex % rule.length];
      if (answer === _answer) {
        rightCounts[person] += 1;
      }
    });
  });
  const maxRightCount = Math.max(...rightCounts);

  return rightCounts
    .map((_, i) => i + 1)
    .filter((_, i) => rightCounts[i] === maxRightCount);
}
