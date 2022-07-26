export function howSum(arr, index, target){
    if(target === 0)  {
        return [];
    }
    if(target < 0) return undefined;

    for(let i = index; i < arr.length; i++){

        let result = howSum(arr, index + 1, target - arr[i]);
        if(result !== undefined){
            return [...result, arr[i]]
        }
    }

    return undefined;
}