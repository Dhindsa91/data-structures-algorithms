export function binarySearch(arr, left, right, search){
    if(left > right) return false;

    const middle = Math.floor((left + right)/2)

    if(arr[middle] === search){
        return true;
    } else if (search < arr[middle]) {
        return binarySearch(arr, left, middle - 1, search);
    } else {
        return binarySearch(arr, middle + 1, right, search);
    }
}