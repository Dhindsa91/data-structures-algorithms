import { buildTree } from "../tree.js";
/**
 * https://www.youtube.com/watch?v=fAAZixBzIAI&t=5818s
 * 
 * @param Input root
 * @param Output Integer  
 * 
 * Sum entire tree
 */

function sumOfTree(node){
    if(!node) return 0;

    return sumOfTree(node.left) + sumOfTree(node.right) + node.val;
}


const tree = buildTree();

const result = sumOfTree(tree.root);
console.log("Sum of tree", result)