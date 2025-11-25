function countTime(time: string): number {
  let count = 1;

  if (time.at(3) === "?") count *= 6;
  if (time.at(4) === "?") count *= 10;
  if (time.at(0) === "?" && time.at(1) === "?") count *= 24;
  else {
    if (time.at(1) === "?") count *= time.at(0) === "2" ? 4 : 10;
    if (time.at(0) === "?") count *= time.at(1)! > "3" ? 2 : 3;
  }
  return count;
}
