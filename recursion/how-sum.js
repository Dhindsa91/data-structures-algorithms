export function howSum(arr, index, target, memo) {
  if (target in memo) return memo[target];
  if (target === 0) {
    return [];
  }
  if (target < 0) return null;

  for (let i = index; i < arr.length; i++) {
    let result = howSum(arr, i + 1, target - arr[i], memo);
    if (result) {
      memo[target] = [...result, arr[i]];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
}

console.log(howSum([1, 3, 5, 4], 0, 8, {}));
