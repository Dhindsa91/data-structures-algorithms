/**
 * https://www.youtube.com/watch?v=tWVWeAqZ0WU&t=7091s
 * 
 * @param Input x,y limits
 * @param Output 
 * 
 * explore grid find all islands
 */

 function islandCount(grid){
    let m = grid.length;
    let n = grid[0].length; 

    const visited = new Set();
    let count = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            let x = dfs(m, n, 0, 0, visited);
            console.log(x);
            if(x){
                count++;
            }
        }
    }

    return count;
 }

 function dfs(m, n, posX, posY, visited){
    const pos = `${m},${n}`;
    if(visited.has(pos)) return false;
    if(posX >= n || posY >= m) return false;
    if(posX < 0 || posY < 0) return false;
    if(grid[posY][posX] === "W") return false

    visited.add(pos);


    dfs(grid, m, n, posX - 1, posY, visited)
    dfs(grid, m, n, posX + 1, posY, visited)
    dfs(grid, m, n, posX, posY - 1, visited)
    dfs(grid, m, n, posX, posY + 1, visited)

    return true;

 }

const grid = [
    ['W',  'L', 'W', 'W', 'W'],
    ['W',  'L', 'W', 'W', 'W'],
    ['W',  'W', 'W', 'L', 'W'],
    ['W',  'W', 'L', 'L', 'W'],
    ['L',  'W', 'W', 'L', 'L'],
    ['L',  'L', 'W', 'W', 'W'],
]


const result = islandCount(grid);
console.log("Islands ", result)