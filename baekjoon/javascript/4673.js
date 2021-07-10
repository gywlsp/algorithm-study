const isSelfNumber = Array(10001).fill(true);

for (let i = 1; i <= 10000; i++) {
  let n = i;
  while (n <= 10000) {
    const nStr = String(n);
    let dn = n;
    for (let j = 0; j < nStr.length; j++) {
      dn += Number(nStr[j]);
    }
    isSelfNumber[dn] = false;
    n = dn;
  }
}

isSelfNumber.forEach((v, i) => {
  if (v && i) {
    console.log(i);
  }
});
