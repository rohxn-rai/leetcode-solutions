// using a loop
// time - 5ms

// note: brute force maybe faster than looping

const romans: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function intToRoman(num: number): string {
  let res: string = "";

  for (const [value, symbol] of romans) {
    if (num === 0) break;
    const count = Math.floor(num / value);
    res += symbol.repeat(count);
    num -= count * value;
  }

  return res;
}

// BruteForced - first try
// time - 4ms
//
// const romans = {
//   1: "I",
//   5: "V",
//   10: "X",
//   50: "L",
//   100: "C",
//   500: "D",
//   1000: "M",
// };

// const repeatedCharacters = (characterToAppend: string, repeatCount: number) => {
//   return characterToAppend.repeat(repeatCount);
// };

// function intToRoman(num: number): string {
//   let res: string = "";
//   if (num > 999) {
//     const count = Math.floor(num / 1000);
//     res += repeatedCharacters(romans[1000], count);
//     num = num % 1000;
//   }
//   if (num > 99) {
//     let count = Math.floor(num / 100);
//     if (count === 9) {
//       res += "CM";
//       count -= 9;
//     }
//     if (count === 4) {
//       res += "CD";
//       count -= 4;
//     }
//     if (count > 4) {
//       res += romans[500];
//       count -= 5;
//     }
//     res += repeatedCharacters(romans[100], count);
//     num = num % 100;
//   }
//   if (num > 9) {
//     let count = Math.floor(num / 10);
//     if (count === 9) {
//       res += "XC";
//       count -= 9;
//     }
//     if (count === 4) {
//       res += "XL";
//       count -= 4;
//     }
//     if (count > 4) {
//       res += romans[50];
//       count -= 5;
//     }
//     res += repeatedCharacters(romans[10], count);
//     num = num % 10;
//   }
//   if (num === 9) {
//     res += "IX";
//     num -= 9;
//   }
//   if (num === 4) {
//     res += "IV";
//     num -= 4;
//   }
//   if (num > 4) {
//     res += romans[5];
//     num -= 5;
//   }
//   res += repeatedCharacters(romans[1], num);

//   return res;
// }
