function solution(tickets) {
  const paths = [];

  const makePath = (path, used) => {
    const lastAirport = path[path.length - 1];
    if (!used.includes(false)) {
      paths.push(path.join(" "));
    }
    tickets.forEach(([from, to], i) => {
      if (used[i] || from !== lastAirport) {
        return;
      }
      makePath(
        [...path, to],
        used.map((v, j) => (i === j ? true : v))
      );
    });
  };

  makePath(
    ["ICN"],
    tickets.map(() => false)
  );

  return paths.sort()[0].split(" ");
}
