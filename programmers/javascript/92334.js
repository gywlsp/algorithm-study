function solution(id_list, report, k) {
  const reportById = id_list.map(() => []);
  const reportedCount = id_list.map(() => 0);
  report.forEach((v) => {
    const [reporter, reported] = v.split(" ");
    const reporterIndex = id_list.indexOf(reporter);
    const reportedIndex = id_list.indexOf(reported);
    if (reportById[reporterIndex].indexOf(reportedIndex) === -1) {
      reportById[reporterIndex].push(reportedIndex);
      reportedCount[reportedIndex] += 1;
    }
  });
  const isBlocked = reportedCount.map((v) => v >= k);
  const result = reportById.map((v) =>
    v.reduce((acc, reported) => (isBlocked[reported] ? acc + 1 : acc), 0)
  );
  return result;
}
