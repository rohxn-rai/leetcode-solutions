function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const len = nums.length;

  for (let x = 0; x < len; x++) {
    if (x > 0 && nums[x] === nums[x - 1]) continue;
    const target = -nums[x];
    let left = x + 1,
      right = nums.length - 1;
    while (left < right) {
      const current_sum = nums[left] + nums[right];
      if (current_sum === target) {
        result.push([nums[x], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (current_sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
