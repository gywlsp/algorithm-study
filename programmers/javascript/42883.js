function solution(number, k) {
  let len = number.length - k;
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    while (stack.length && stack[stack.length - 1] < number[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  return stack.slice(0, len).join("");
}
