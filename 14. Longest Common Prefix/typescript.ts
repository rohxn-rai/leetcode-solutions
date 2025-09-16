// Best optimized solution
// time - 0ms
// beats - 100.00%

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";

  strs.sort();

  const first = strs[0],
    last = strs[strs.length - 1];
  let result = "",
    i = 0;

  while (i < first.length) {
    if (first[i] === last[i]) result += first[i];
    else break;
    i++;
  }

  return result;
}
