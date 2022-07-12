import { DirectedGraph as Graph } from "../directed.js";

const graph = new Graph(6);
graph.addDirectedEdge(0, 1);
graph.addDirectedEdge(0, 3);
graph.addDirectedEdge(1, 2);
graph.addDirectedEdge(2, 5);
graph.addDirectedEdge(3, 5);

console.log("Breadth First Search");
graph.bfs(0, []);
console.log("Depth First Search");
graph.dfs(0, []);
console.log("Topological Sort");
graph.topologicalSort();

const graph2 = new Graph(7);
graph2.addDirectedEdge(0, 1);
graph2.addDirectedEdge(0, 2);
graph2.addDirectedEdge(1, 3);
graph2.addDirectedEdge(2, 4);
graph2.addDirectedEdge(3, 5);
graph2.addDirectedEdge(5, 6);
graph2.addDirectedEdge(6, 1);

console.log("Breadth First Search");
graph2.bfs(0, []);
console.log("Depth First Search");
graph2.dfs(0, []);
console.log("Topological Sort");
graph2.topologicalSort();