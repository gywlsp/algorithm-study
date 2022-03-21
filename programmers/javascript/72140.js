const solution = (newId) => {
  const tempId = newId
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return tempId.padEnd(3, tempId[tempId.length - 1]);
};
