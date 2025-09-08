function twoSum(nums: number[], target: number): number[] {
  const m = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (m.has(rest)) {
      return [m.get(rest)!, i];
    }
    m.set(nums[i], i);
  }
  return [];
}
