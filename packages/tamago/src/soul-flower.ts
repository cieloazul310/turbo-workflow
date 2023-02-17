export function divisor(num: number) {
  const divisors: number[] = [];
  for (let i = 2; i < Math.ceil(num / 2) + 1; i += 1) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
}

function soulFlower(a: number, b: number) {
  if (a % b === 0) return a;
  if (b % a === 0) return b;
  const divisorsA = divisor(a);
  const divisorsB = divisor(b);

  const kouyakusu = divisorsA.filter((value) => divisorsB.includes(value));
  if (kouyakusu.length === 0) return 1;
  return kouyakusu[kouyakusu.length - 1];
}

export default soulFlower;
