const isSelfNumber = Array(10001).fill(true);

for (let i = 1; i <= 10000; i++) {
  let n = i;
  while (n <= 10000) {
    const dn = String(n)
      .split("")
      .reduce((acc, curr) => acc + Number(curr), n);
    isSelfNumber[dn] = false;
    n = dn;
  }
}

isSelfNumber.forEach((v, i) => {
  if (v && i) {
    console.log(i);
  }
});
