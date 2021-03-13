//https://www.acmicpc.net/problem/1780

const input = [];

const strToNumArr = (str) => str.split(" ").map(Number);
const result = [0, 0, 0];

const explore = (paper, len, rs, cs) => {
  if (len === 1) {
    result[paper[rs][cs] + 1] += 1;
    return;
  }

  const included_numbers = [];
  let current_number = undefined;
  for (let r = rs; r < rs + len; r++) {
    for (let c = cs; c < cs + len; c++) {
      current_number = paper[r][c];
      if (!included_numbers.includes(current_number)) {
        included_numbers.push(current_number);
      }
      if (included_numbers.length > 1) break;
    }
    if (included_numbers.length > 1) {
      break;
    }
  }

  if (included_numbers.length > 1) {
    const next_len = len / 3;
    const rs_list = [rs, rs + next_len, rs + next_len * 2];
    const cs_list = [cs, cs + next_len, cs + next_len * 2];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        explore(paper, next_len, rs_list[i], cs_list[j]);
      }
    }
  } else {
    result[included_numbers.pop() + 1] += 1;
  }
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, ...paper] = input.map((e) => strToNumArr(e));
    explore(paper, N, 0, 0);
    result.forEach((num) => console.log(num));
  });
