function solution(numbers) {
  if (numbers.every((v) => v === 0)) {
    return "0";
  }
  numbers.sort((a, b) => {
    const a_first = String(a) + String(b);
    const b_first = String(b) + String(a);
    return b_first - a_first;
  });
  return numbers.join("");
}
