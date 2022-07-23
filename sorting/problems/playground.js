import { mergeSort } from "../mergesort.js";

const arr = [6, 3, 7, 2, 8, 1, 9, 4];

mergeSort(arr, 0, arr.length - 1);
console.log(arr)