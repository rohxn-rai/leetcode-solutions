function helper(s: string, p: string[]) {
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    if (j >= p.length) {
      return false;
    }

    let matching_case = p[j];
    let letter = s[i];

    if (matching_case.length > 1) {
      let s_sliced = s.slice(i);
      let p_sliced = p.slice(j + 1);
      let base_case = helper(s_sliced, p_sliced);
      if (base_case) {
        return true;
      }
      let matching_letter = matching_case[0];
      if (matching_letter !== letter && matching_letter !== ".") {
        return false;
      }
    } else if (letter === matching_case || matching_case === ".") {
      j++;
    } else {
      return false;
    }
  }
  while (j < p.length) {
    if (p[j].length < 2) {
      return false;
    }
    j++;
  }
  return j === p.length;
}

function isMatch(s: string, p: string): boolean {
  let states: string[] = [];
  let curr = "";
  let try_last = "";
  for (let i = p.length - 1; i >= 0; i--) {
    curr = p[i] + curr;
    if (curr !== "*") {
      if (curr.length > 1 && curr === try_last) {
        curr = "";
        continue;
      }
      states.unshift(curr);
      try_last = curr;
      curr = "";
    }
  }
  return helper(s, states);
}
