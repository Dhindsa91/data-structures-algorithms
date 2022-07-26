import { buildTree } from "../tree.js";
/**
 * @param Input root
 * @param Output Integer  
 * 
 * get height of tree
 */

function getHeight(node, height){
    if(node.left === null && node.right === null) return height;

    return Math.max(getHeight(node.left, height + 1), getHeight(node.right, height + 1))
}

const tree = new buildTree();

const result = getHeight(tree.root, 0);
console.log("Height of tree", result)