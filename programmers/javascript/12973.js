function solution(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - 1] === str[i]) {
      stack.pop();
      continue;
    }
    stack.push(str[i]);
  }
  return stack.length > 0 ? 0 : 1;
}
