import { buildTree } from "../tree.js";
/**
 * @param Input root
 * @param Output Integer
 *
 * return all nodes at a level
 */

function getLevelNodes(node, level) {
  debugger;
  if (!node) return [];
  if (level === 0) return [node.val];

  const left = getLevelNodes(node.left, level - 1);
  const right = getLevelNodes(node.right, level - 1);

  return [...left, ...right];
}

const tree = new buildTree();
const level = 2;
const result = getLevelNodes(tree.root, level);
console.log(`Nodes at level ${level}`, result);
