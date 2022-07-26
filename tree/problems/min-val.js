import { buildTree } from "../tree.js";
/**
 * @param Input root
 * @param Output Integer  
 * 
 * Find minimum value in tree
 */

function minValue(node){
    if(!node.left && !node.right) return node.val;
    return Math.min(minValue(node.left), minValue(node.left));
}

const tree = new buildTree();

const result = minValue(tree.root);
console.log("Minimum tree value", result)