function bestSum(arr, target, index, memo) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let bestResult = null;
  for (let i = index; i < arr.length; i++) {
    const result = bestSum(arr, target - arr[i], i + 1);
    if ((result && !bestResult) || (result && result.length < bestResult.length)) {
      bestResult = [...result, arr[i]];
    }
  }

  memo[target] = bestResult;
  return bestResult;
}

console.log("Backtacking: ", bestSum([1, 3, 5, 4], 4, 0, {}));
