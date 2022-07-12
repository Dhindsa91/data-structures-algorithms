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

    topologicalSort() {
        // initialize
        let visited = new Array(this.vertex).fill(false);
        let backtrack = new Array(this.vertex).fill(false);
        let stack = [];

        // for each vertex not visited
        for (let vertex in this.graph) {
          if (!visited[vertex]) {
            this.topologicalSortUtil(vertex, visited, stack, backtrack);
          }
        }

        // pop off our nodes
        while (stack.length) {
          console.log(stack.pop());
        }
      }
    
      topologicalSortUtil(vertex, visited, stack, backtrack) {
        // dfs search
        if(backtrack[vertex]) console.warn("Is Cyclical");
        
        if(visited[vertex]) return;

        visited[vertex] = true;
        backtrack[vertex] = true;
        let children = this.graph[vertex] || [];
    
        for (let v of children) {
            this.topologicalSortUtil(v, visited, stack, backtrack);
        }
    
        // append the nodes on the stack back-to-front
        backtrack[vertex] = false;
        stack.push(vertex);
      }



}