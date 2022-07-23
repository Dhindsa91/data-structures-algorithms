function backtrackUtil(arr, start, temp, result){
    if(temp.length > 0){
        result.push(Object.assign([], temp));
    }

    for(let i = start; i < arr.length; i++){
        temp.push(arr[i]);
        backtrackUtil(arr, i + 1, temp, result);
        temp.pop();
    }
}

export function backtrack(arr){
    let result = [];
    backtrackUtil(arr, 0, [], result);
    return result;
}