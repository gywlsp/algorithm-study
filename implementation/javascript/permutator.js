const permutator = (inputArr) => {
  let result = [];

  const permute = (restArr, newArr = []) => {
    if (restArr.length === 0) {
      result.push(newArr);
      return;
    }
    for (let i = 0; i < restArr.length; i++) {
      const _rest = restArr.slice();
      const _new = _rest.splice(i, 1);
      permute(_rest, newArr.concat(_new));
    }
  };

  permute(inputArr);

  return result;
};

console.log(permutator(["c", "a", "t"]));
