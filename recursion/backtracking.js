function backtrackUtil(arr, start, temp, result, target) {
  console.log("Called With: ", arr[start]);
  if (target === 0) {
    result.push(Object.assign([], temp));
    return;
  }

  for (let i = start; i < arr.length; i++) {
    temp.push(arr[i]);
    backtrackUtil(arr, i + 1, temp, result, target - arr[i]);
    temp.pop();
  }
}

export function backtrack(arr, target) {
  let result = [];
  backtrackUtil(arr, 0, [], result, target);
  return result;
}

console.log("Backtacking: ", backtrack([1, 3, 5, 4], 4));
