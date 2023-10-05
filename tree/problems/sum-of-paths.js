import { buildTree } from "../tree.js";
/**
 * @param Input root
 * @param Output Integer
 *
 * Sum all paths
 */

function sumOfPaths(node, sum) {
  if (!node) return [];
  if (!node.left && !node.right) return [sum + node.val];

  let left = sumOfPaths(node.left, sum + node.val);
  let right = sumOfPaths(node.right, sum + node.val);

  return [...left, ...right];
}

const tree = new buildTree();

const result = sumOfPaths(tree.root, 0);
console.log("Sum of paths", result);
