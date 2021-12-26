function solution(input) {
  const record = input.map((v) => v.split(" "));
  const userMap = new Map();
  record.forEach(([action, uid, nickname]) => {
    if (action === "Leave") {
      return;
    }
    userMap.set(uid, nickname);
  });
  const result = [];
  record.forEach(([action, uid, _]) => {
    if (action === "Change") {
      return;
    }
    result.push(
      `${userMap.get(uid)}님이 ${
        action === "Enter" ? "들어왔습니다" : "나갔습니다"
      }.`
    );
  });
  return result;
}
