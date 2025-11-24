function isValid(s: string): boolean {
  const open = "([{";
  const check: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) check.push(s[i]);
    else {
      if (s[i] === ")" && check.pop() !== "(") return false;
      else if (s[i] === "]" && check.pop() !== "[") return false;
      else if (s[i] === "}" && check.pop() !== "{") return false;
    }
  }
  return !check.length;
}
