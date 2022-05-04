function solution(info, query) {
  const infoArr = info.map((str) => str.split(" "));
  const result = query.map((str) => {
    const q = str.split(" and ").filter((v) => v !== "-");
    const matchCnt = infoArr.reduce((acc, curr) => {
      let match = true;
      for (let i = 0; i < q.length; i++) {
        if (
          (i < q.length - 1 && !curr.includes(q[i])) ||
          (i === q.length - 1 && +q[i] > +curr[4])
        ) {
          match = false;
          break;
        }
      }
      return match ? acc + 1 : acc;
    }, 0);
    return matchCnt;
  });
  return result;
}
