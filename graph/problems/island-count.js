/**
 * https://www.youtube.com/watch?v=tWVWeAqZ0WU&t=7091s
 * 
 * @param Input x,y limits
 * @param Output 
 * 
 * explore grid find all islands
 */

 function islandCount(grid){
    let y = grid.length;
    let x = grid[0].length; 
    console.log(y, x)

    const visited = new Set();
    let count = 0;

    for(let i = 0; i < y; i++){
        for(let j = 0; j < x; j++){
            let re = dfs(y, x, i, j, visited);
            console.log(re);
            if(re){
                count++;
            }
        }
    }

    return count;
 }

 function dfs(y, x, posX, posY, visited){
    if(posX >= x || posY >= y) return false;
    if(posX < 0 || posY < 0) return false;

    if(grid[posY][posX] === "L") {
    }

    if(grid[posY][posX] === "W") return false

    const pos = `${posX},${posY}`;
    if(visited.has(pos)) return false;
    visited.add(pos);

    dfs( y, x, posX - 1, posY, visited)
    dfs( y, x, posX + 1, posY, visited)
    dfs( y, x, posX, posY - 1, visited)
    dfs( y, x, posX, posY + 1, visited)

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