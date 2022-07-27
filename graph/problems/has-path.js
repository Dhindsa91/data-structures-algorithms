import { DirectedGraph as Graph } from "../directed.js";
/**
 * @param Input integer
 * @param Output boolean
 * 
 * Does graph have path from src to dest
 * 
 */
function hasPath(graph, src, dst){
    let visited = new Array(graph.vertex).fill(false);
    let visited2 = new Array(graph.vertex).fill(false);

    return [ dfs(graph.graph, visited, src, dst), bfs(graph.graph, visited2, src, dst) ]
}

function dfs(graph, visited, node, dst){
    if(node === dst) return true
    visited[node] = true;
    let children = graph[node] || [];
    for(let i of children){
        if(!visited[i]){
            if(dfs(graph, visited, i, dst)) return true;
        }
    }

    return false;
}

function bfs(graph, visited, src, dst){

    visited[src] = true;
    let q = [];

    q.push(src);

    while(q.length){
        let current = q.shift();
        if(current === dst) return true
        let children = graph[current];
        for(let i of children){
            if(!visited[i]){
                q.push(i);
                visited[i] = true;
            }
        }
    }

    return false;
}

const graph = new Graph(6);
graph.addDirectedEdge(0, 1);
graph.addDirectedEdge(0, 3);
graph.addDirectedEdge(1, 2);
graph.addDirectedEdge(3, 1);
graph.addDirectedEdge(4, 3);
graph.addDirectedEdge(3, 5);
const result = hasPath(graph, 4, 0);
console.log("Result of has path", result);
