import { binarySearch } from "../binary-search.js";

const arr = [1, 5, 7, 11, 19, 22, 31, 44, 52];

const result = binarySearch(arr, 0, arr.length - 1, 3);
console.log("binary Search Results", result)