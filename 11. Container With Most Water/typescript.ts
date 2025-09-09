function maxArea(height: number[]): number {
  let low: number = 0;
  let high: number = height.length - 1;
  let max: number = 0;
  while (low <= high) {
    max = Math.max(max, (high - low) * Math.min(height[low], height[high]));
    if (height[low] > height[high]) high--;
    else low++;
  }
  return max;
}
