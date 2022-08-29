/**
 * https://www.youtube.com/watch?v=tWVWeAqZ0WU&t=7091s
 * @param Input dest
 * @param Output integer
 * 
 */

function shortestPath(grid, src, dst, visited){
    let shortest = Number.MAX_VALUE;

    visited[src] = true;
    let q = [];
    q.push([src, 0]);

    while(q.length){
        let [ node, distance ] = q.shift();
        if(node === dst) {
            if(distance < shortest){
                shortest = distance;
            }
        }

        let children = grid[node];
        for(let i of children){
            if(!visited[i]){
                q.push([i, distance + 1]);
                visited[i] = true;
            }
        }
    }

    return shortest;
}

const grid = {
    'v': ['w'],
    'w': ['x', 'v'],
    'x': ['y', 'w'],
    'y': ['x', 'z'],
    'z': ['y'],
}
const src = 'v';
const dst = 'z';
const result = shortestPath(grid, src, dst, new Array(5).fill(false));
console.log(`Shortest path from ${src} to ${dst}`, result)