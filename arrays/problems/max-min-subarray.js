function maxSubArray(arr, k){
    let result = 0;

    // compute sum
    let sum = 0;
    for(let i = 0; i < k; i++){
        sum += arr[i];
    }

    let curSum = sum;
    for(let i = k; i < arr.length; i++){
        curSum += arr[i] - arr[i-k];
        result = Math.max(curSum, result);
    }

    return result;
}

console.log(maxSubArray([4, 2, 10, 7, 13, 2, 4, 7], 2));


function hello(arr, index, temp, result){
    if(temp.length === 3){
        result.push(Object.assign([], temp))
        return;
    }

    for(let i = index; i < arr.length; i++){
        temp.push(arr[i])
        hello(arr, i + 1, temp, result);
        temp.pop()
    }
}

let result = []
hello([1,2,3,4,5], 0, [], result);
console.log(result);


let arr = [1, 2, 3, 4];
function test(arr){
for(let one of arr){
    for(let two of arr){
        for(let three of arr){
            return true
        }
    }
}
}

console.log(123, test(arr));