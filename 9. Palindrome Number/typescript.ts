function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let n = x;
  let rev: number = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = (x / 10) | 0;
  }
  return rev === n;
}
