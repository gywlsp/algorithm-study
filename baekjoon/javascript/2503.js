//https://www.acmicpc.net/problem/2503

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    let t = +input.shift();
    const answer = [];
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        for (let k = 1; k <= 9; k++) {
          if (i !== j && j !== k && k !== i) {
            answer.push(`${i}${j}${k}`);
          }
        }
      }
    }

    while (t--) {
      const [N, S, B] = input
        .shift()
        .split(" ")
        .map((v, i) => (i ? +v : v));

      for (let n_i = 0; n_i < answer.length; n_i++) {
        const n = answer[n_i];
        let s = 0,
          b = 0;
        for (let i = 0; i <= 2; i++) {
          if (n[i] === N[i]) {
            s++;
          } else if (n.includes(N[i])) {
            b++;
          }
        }

        if (s === S && b === B) {
          continue;
        }
        answer.splice(n_i, 1);
        n_i--;
      }
    }
    console.log(answer.length);
  });
