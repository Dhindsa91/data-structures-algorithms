import { backtrack } from "../backtracking.js";
import { howSum } from "../how-sum.js/index.js";
import { allSums } from "../all-sums.js/index.js";

const arr = [1, 2, 3, 4];


// const backtrackResult = backtrack(arr);
// console.log("Backtracking Result", backtrackResult);


// const howSumResult = howSum(arr, 0, -1);
// console.log("How Sum Result", howSumResult);

const allSumsResult = allSums(arr, 0, 6);
console.log("All Sum Result", allSumsResult);