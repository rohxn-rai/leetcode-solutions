const commonFactors = (a: number, b: number): number => {
  let count = 1;

  for (let i = 2; i < a + 1; i++) {
    if (a % i === 0 && b % i === 0) count++;
  }

  return count;
};
