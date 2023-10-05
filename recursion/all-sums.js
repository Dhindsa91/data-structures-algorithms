export function allSums(arr, target, index) {
  debugger;
  if (target === 0) return [[]];
  if (target < 0) return null;

  let sums = [];

  for (let i = index; i < arr.length; i++) {
    let result = allSums(arr, target - arr[i], i + 1);
    if (result) {
      sums.push(...result.map((res) => [...res, arr[i]]));
    }
  }

  return sums;
}

console.log("Backtacking: ", allSums([1, 3, 5, 4], 4, 0));
