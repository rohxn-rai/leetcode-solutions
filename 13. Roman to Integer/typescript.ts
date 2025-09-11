// optimised solution
// time - 2ms

const values: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let total = 0;
  let i = 0;

  while (i < s.length) {
    const current = values[s[i]];
    const next = i + 1 < s.length ? values[s[i + 1]] : 0;

    if (current < next) {
      total += next - current;
      i += 2;
    } else {
      total += current;
      i++;
    }
  }

  return total;
}

// brute force
// time - 8ms
//
// const romans: Record<number, string> = {
//   1: "I",
//   5: "V",
//   10: "X",
//   50: "L",
//   100: "C",
//   500: "D",
//   1000: "M",
// };

// const startsWithAt = (s: string, prefix: string, pos: number): boolean => {
//   return s.substr(pos, prefix.length) === prefix;
// };

// function romanToInt(s: string): number {
//   let i = 0;
//   let result = 0;

//   while (startsWithAt(s, romans[1000], i)) {
//     result += 1000;
//     i += 1;
//   }

//   if (startsWithAt(s, "CM", i)) {
//     result += 900;
//     i += 2;
//   } else if (startsWithAt(s, "CD", i)) {
//     result += 400;
//     i += 2;
//   } else {
//     if (startsWithAt(s, romans[500], i)) {
//       result += 500;
//       i += 1;
//     }
//     while (startsWithAt(s, romans[100], i)) {
//       result += 100;
//       i += 1;
//     }
//   }

//   if (startsWithAt(s, "XC", i)) {
//     result += 90;
//     i += 2;
//   } else if (startsWithAt(s, "XL", i)) {
//     result += 40;
//     i += 2;
//   } else {
//     if (startsWithAt(s, romans[50], i)) {
//       result += 50;
//       i += 1;
//     }
//     while (startsWithAt(s, romans[10], i)) {
//       result += 10;
//       i += 1;
//     }
//   }

//   if (startsWithAt(s, "IX", i)) {
//     result += 9;
//     i += 2;
//   } else if (startsWithAt(s, "IV", i)) {
//     result += 4;
//     i += 2;
//   } else {
//     if (startsWithAt(s, romans[5], i)) {
//       result += 5;
//       i += 1;
//     }
//     while (startsWithAt(s, romans[1], i)) {
//       result += 1;
//       i += 1;
//     }
//   }

//   return result;
// }

// looped
// time - 6ms
//
// const romans: Record<string, number> = {
//   I: 1,
//   IV: 4,
//   V: 5,
//   IX: 9,
//   X: 10,
//   XL: 40,
//   L: 50,
//   XC: 90,
//   C: 100,
//   CD: 400,
//   D: 500,
//   CM: 900,
//   M: 1000,
// };

// function romanToInt(s: string): number {
//   let num: number = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (i < s.length - 1) {
//       const twoChar = s.substring(i, i + 2);
//       if (romans[twoChar]) {
//         num += romans[twoChar];
//         i++;
//         continue;
//       }
//     }

//     const oneChar = s[i];
//     if (romans[oneChar]) {
//       num += romans[oneChar];
//     }
//   }

//   return num;
// }
