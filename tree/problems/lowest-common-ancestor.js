import { buildTree } from "../tree.js";
/**
 * @return {INCOMPLETE -> FINISH THE IMPLEMENTATION}
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * @param Input root
 * @param Output Tree Node 
 * 
 * lowest common ancestor
 */
function LCA(root, p, q){
    if(root.val < p && root.val < q){
        return LCA(root.right, p, q);
    } else if (root.val > p && root.val > q){
        return LCA(root.left, p, q);
    } else {
        return root;
    }
}

const tree = new buildTree();

const result = LCA(tree.root, 0, 8);
console.log("Lowest Common Ancestor", result)