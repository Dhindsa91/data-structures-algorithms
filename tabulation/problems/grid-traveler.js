function gridTraverler(m, n){
    const table = new Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    console.log(table)

    table[1][1] = 1;

    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            let current = table[i][j];
            if(j + 1 <= n) table[i][j + 1] += current;
            if(i + 1 <= m) table[i + 1][j] += current;
        }
    }

    return table[m][n]
}


console.log(gridTraverler(3, 3));