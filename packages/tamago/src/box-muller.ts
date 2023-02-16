// https://qiita.com/sw1227/items/8f5da8c22d907352e4c9

/**
 * 
 * @param n 生成する乱数の数
 * @returns 正規分布に基づいた乱数
 */
function boxMuller(n: number) {
  const a = Array.from({ length: Math.ceil(n / 2) });
  const b = a.map(() => {
    const r = Math.sqrt(-2 * Math.log(Math.random()));
    const theta = 2 * Math.PI * Math.random();
    const z1 = r * Math.cos(theta);
    const z2 = r * Math.sin(theta);
    return [z1, z2];
  });
  const c = b.reduce((accum, curr) => [...accum, ...curr], []);
  return c.slice(0, n);
}

export default boxMuller;
