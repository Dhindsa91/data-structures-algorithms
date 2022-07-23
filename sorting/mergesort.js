function merge(arr, l, m, r) { 
    /* Create temp arrays */
    /*Copy data to temp arrays*/
    let L = arr.slice(l, m + 1);
    let R = arr.slice(m + 1, r + 1);
    let k = l;
   
    while (L.length && R.length) {
        if (L[0] <= R[0]) {
            arr[k] = L.shift();
        }
        else {
            arr[k] = R.shift();
        }
        k++;
    }

    debugger
 
    /* Copy remaining elements of L[] if any */
    while (L.length) {
        arr[k] = L.shift();
        k++;
    }

    /* Copy remaining elements of R[] if any */
    while (R.length) {
        arr[k] = R.shift();
        k++;
    }
}

export function mergeSort(arr, l, r) {

  if (l < r) {
    // recursively split the array
    const m = Math.floor((l + (r - 1)) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    // merge and sort all sub arrays.
    merge(arr, l, m, r);
  }
}
