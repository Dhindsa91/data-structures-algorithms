export default class Graph {
    graph = [];
    vertex = null;

    constructor(vertex){
        this.vertex = vertex;
        for(let i = 0; i < vertex; i++) this.graph.push([]);
    }

    bfs(vertex){
        // initialize
        let visited = new Array(this.vertex).fill(false);

        // update state
        visited[vertex] = true;
        let q = [];
        q.push(vertex)

        // iterate
        while(q.length){
            let current = q.shift();
            console.log(current);
            let children = this.graph[current];
            for(let i of children){
                if(!visited[i]){
                    q.push(i);
                    visited[i] = true;
                }
            }
        }
    }

    dfs(vertex, visited){
        console.log(vertex);
        
        // update state
        visited[vertex] = true;
        let children = this.graph[vertex];

        // stopping case
        if(!children) return;

        for(let i of children){
            if(!visited[i]){
                this.dfs(i, visited);
            }
        }
    }




}