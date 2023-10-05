function binarySearch(arr, l, h, search){

    let low = l;
    let high = h;

    debugger;
    while(low < high){
        let mid = Math.floor((low + high)/ 2);

        // if(arr[mid] === search) return arr[mid];
        if(search < arr[mid]){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
}

function binarySearch2(arr, left, right, search){
    debugger;
    if(left > right) return left;
    
    let mid = Math.floor((left + right)/2);
    if(arr[mid]){
        return binarySearch2(arr, left, mid - 1, search);
    } else {
        return binarySearch2(arr, mid + 1, right, search);
    }
}


function binarySearch3(left, right, search){
    if(left > right) return left - 1;
    
    let mid = Math.floor((left + right)/2);

    if(mid*mid >= search){
        return binarySearch3(left, mid - 1, search);S
    } else {
        return binarySearch3(mid + 1, right, search);
    }
}


const arr = [false, false, true, true, true];
console.log(binarySearch2(arr, 0, arr.length - 1, 8));