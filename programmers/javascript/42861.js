function solution(n, costs) {
  let result = 0;
  const parent = [...Array(n)].map((_, i) => i);
  const getParent = (u) => {
    if (parent[u] === u) return u;
    return (parent[u] = getParent(parent[u]));
  };
  const unionParent = (u, v) => {
    const pu = getParent(u);
    const pv = getParent(v);
    if (pu > pv) return (parent[pu] = pv);
    return (parent[pv] = pu);
  };
  const isParentSame = (u, v) => {
    const pu = getParent(u);
    const pv = getParent(v);
    return pu === pv;
  };
  costs
    .sort((a, b) => a[2] - b[2])
    .forEach(([u, v, w]) => {
      if (isParentSame(u, v)) return;
      result += w;
      unionParent(u, v);
    });
  return result;
}
