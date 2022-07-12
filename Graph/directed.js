import Graph from "./graph.js";

export class DirectedGraph extends Graph {

    constructor(vertex, graph = []){
        super(vertex, graph);
    }

    addDirectedEdge(parent, child){
        this.graph[parent].push(child);
    }

}
