function permutations(arr, index, result){
    if(arr.length === index){
        result.push(Object.assign([], arr));
    }

    for(let i = index; i < arr.length; i++){
        swap(arr, i, index);
        permutations(arr, index + 1, result);
        swap(arr, index, i);
    }
}

function swap(arr, i, j) {
    return [arr[i],arr[j]] = [arr[j],arr[i]];
}

const result = [];
permutations([1, 2, 3], 0, result);
console.log(result);