function lengthOfLongestSubstring(s: string): number {
  const subStr = new Map<string, number>();
  let start = 0;
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (subStr.has(s[i]) && subStr.get(s[i])! >= start) {
      start = subStr.get(s[i])! + 1;
    }

    subStr.set(s[i], i);
    longest = Math.max(longest, i - start + 1);
  }

  return longest;
}
