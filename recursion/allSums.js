export function allSums(arr, index, target){
    // debugger;
    if(target === 0)  return [[]];

    if(target < 0) return undefined;
    let sums = [];

    for(let i = index; i < arr.length; i++){

        let result = allSums(arr, index + 1, target - arr[i]);
        if(result !== undefined){
            sums.push(...result.map(x => [arr[i], ...x]));
        }
    }

    return sums;
}