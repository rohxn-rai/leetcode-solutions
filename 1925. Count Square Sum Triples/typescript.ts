function countTriples(n: number): number {
  let count: number = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sumSqrt: number = Math.sqrt(i * i + j * j);
      if (sumSqrt > n) break;
      if (Number.isInteger(sumSqrt)) count += 2;
    }
  }
  return count;
}
