function solution(s) {
  let result = 987654321;
  const unit = [];
  const count = [];
  for (let n = 1; n <= s.length; n++) {
    for (let i = 0; i < s.length; i += n) {
      const str = s.slice(i, i + n);
      if (unit.length && str === unit[unit.length - 1]) {
        count[count.length - 1] += 1;
        continue;
      }
      unit.push(str);
      count.push(1);
    }
    const len = unit.reduce((acc, curr, index) => {
      return (
        acc +
        curr.length +
        (count[index] === 1 ? 0 : String(count[index]).length)
      );
    }, 0);
    result = Math.min(result, len);
    unit.splice(0, unit.length);
    count.splice(0, count.length);
  }
  return result;
}
