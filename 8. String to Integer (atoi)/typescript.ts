const ATOI_REGEX = /^\s*([+-]?)(\d+)/;

function myAtoi(s: string): number {
  const match = s.match(ATOI_REGEX);
  if (!match) return 0;

  const isNegative = match[1] === "-";
  const digits = match[2];

  let result = 0;
  const limit = isNegative ? 2147483648 : 2147483647;

  for (let i = 0; i < digits.length; i++) {
    const digit = digits.charCodeAt(i) - 48;

    if (result > (limit - digit) / 10) {
      return isNegative ? -2147483648 : 2147483647;
    }

    result = result * 10 + digit;
  }

  return isNegative ? -result : result;
}
