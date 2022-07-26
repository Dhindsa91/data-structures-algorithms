/**
 * https://leetcode.com/problems/container-with-most-water/
 *
 * @param Input: array of wall height
 * @param Output: water captured (eg: 49)
 */

function containerWithMostWater(height) {
  let water = -1;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let buckets = calculateArea(
      Math.min(height[left], height[right]),
      right - left
    );
    if (buckets > water) water = buckets;

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return water;
}

var calculateArea = function (height, width) {
  return height * width;
};
