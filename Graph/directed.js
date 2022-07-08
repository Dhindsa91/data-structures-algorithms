import Graph from "./graph.js";

export class DirectedGraph extends Graph {

    constructor(vertex){
        super(vertex);
    }

    addDirectedEdge(parent, child){
        this.graph[parent].push(child);
    }

}

const graph = new DirectedGraph(3);
graph.addDirectedEdge(0, 1);
graph.addDirectedEdge(0, 2);
graph.addDirectedEdge(1, 3);