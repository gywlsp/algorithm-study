function solution(user_id, banned_id) {
  const possibleUids = banned_id.map((bid) => {
    const possibleUid = [];
    user_id.forEach((uid) => {
      if (bid.length !== uid.length) {
        return;
      }
      for (let i = 0; i < uid.length; i++) {
        if (uid[i] === bid[i] || bid[i] === "*") {
          continue;
        }
        return;
      }
      possibleUid.push(uid);
    });
    return possibleUid;
  });

  const answerSet = new Set();
  const solve = (combination) => {
    if (combination.length === banned_id.length) {
      combination.sort();
      answerSet.add(combination.join(" "));
      return;
    }
    possibleUids[combination.length].forEach((uid) => {
      if (!combination.includes(uid)) {
        solve([...combination, uid]);
      }
    });
  };
  solve([]);
  return answerSet.size;
}

console.log(
  solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["*rodo", "*rodo", "******"]
  )
);
