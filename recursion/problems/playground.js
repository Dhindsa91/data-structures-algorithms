import { backtrack } from "./backtracking.js";
import { howSum } from "./howSum.js";
import { allSums } from "./allSums.js";

const arr = [1, 2, 3, 4];


// const backtrackResult = backtrack(arr);
// console.log("Backtracking Result", backtrackResult);


// const howSumResult = howSum(arr, 0, -1);
// console.log("How Sum Result", howSumResult);

const allSumsResult = allSums(arr, 0, 6);
console.log("All Sum Result", allSumsResult);