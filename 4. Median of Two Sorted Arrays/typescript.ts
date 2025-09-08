function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums: number[] = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);

  if (nums.length % 2 === 1) {
    return nums[mid];
  } else {
    return (nums[mid] + nums[mid - 1]) / 2;
  }
}
