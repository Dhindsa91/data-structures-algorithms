function canSum(arr, target){
    // Visualize => Size Table 
    let result = new Array(target).fill(null);
    result[0] = [];

    // Trivial solutions
    for(let i = 0; i < result.length; i++){
        let current = result[i];
        if(current !== null){
            for(let j = 0; j < arr.length; j++){
                if(i + arr[j] <= target) result[i + arr[j]] = [...current, arr[j]];
            }
        }
        
    }

    return result[target]
}

console.log(canSum([5, 3, 4], 7));