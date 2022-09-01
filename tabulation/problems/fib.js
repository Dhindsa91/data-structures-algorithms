function fibonacci(fib){
    debugger;
    // Visualize => Size Table 
    let result = new Array(fib + 1).fill(0);
    console.debug("This is a debug message", result)
    // Seed Trivial Solutions
    result[0] = 0;
    result[1] = 1;

    // Iterate through table
    for(let i = 2; i < result.length; i++){
        
        result[i] = result[i - 1] + result[i - 2]; 
    }

    return result[result.length - 1]
}

console.info(fibonacci(6));