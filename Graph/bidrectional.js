import Graph from "./graph";

export class BiDirectedGraph extends Graph {

    constructor(vertex){
        super(vertex);
    }

    addBiDirectedEdge(parent, child){
        this.graph[parent].push(child);
        this.graph[child].push(parent);
    }

}