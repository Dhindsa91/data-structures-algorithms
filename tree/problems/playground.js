import { Tree } from "../tree.js";

const tree = new Tree();
tree.insert(50, tree.root);
tree.insert(25, tree.root);
tree.insert(75, tree.root);
tree.insert(15, tree.root);
tree.insert(40, tree.root);
tree.insert(60, tree.root);
tree.insert(80, tree.root);
tree.insert(10, tree.root);
tree.insert(20, tree.root);

console.log("Breadth First Search");
tree.bfs(tree.root)
console.log("Pre Order Search");
tree.preOrderTraversal(tree.root)
console.log("Post Order Search");
tree.postOrderTraversal(tree.root)
console.log("In Order Search");
tree.inOrderTraversal(tree.root)