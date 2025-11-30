const map: Record<number, string[]> = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const backTrackLetterCombinations = (
  digits: string,
  current: string,
  results: string[]
) => {
  if (current.length === digits.length) {
    results.push(current);
    return;
  }

  const possibleDigits = map[+digits[current.length]];

  for (let i = 0; i < possibleDigits.length; i++) {
    current = current + possibleDigits[i];
    backTrackLetterCombinations(digits, current, results);
    current = current.slice(0, -1);
  }
};

function letterCombinations(digits: string): string[] {
  const result: string[] = [];
  backTrackLetterCombinations(digits, "", result);
  return result;
}
