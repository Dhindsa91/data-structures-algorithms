export class Tree {
  root = null;

  insert(val, root) {
    if (!root) return (this.root = new Node(val));

    if (val < root.val) {
      if (!root.left) root.left = new Node(val);
      else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) root.right = new Node(val);
      else {
        this.insert(val, root.right);
      }
    }
  }

  bfs(root) {
    let q = [];
    q.push(root);

    while (q.length) {
      let current = q.shift();
      console.log(current.val);

      if (current.left) q.push(current.left);
      if (current.right) q.push(current.right);
    }
  }

  // DFS
  preOrderTraversal(node) {
    if (!node) return;

    console.log(node.val);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  /**
   * Figure 1 Traversal
   *
   */
  postOrderTraversal(node) {
    if (!node) return;

    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.val);
  }

  inOrderTraversal(node) {
    if (!node) return;

    this.inOrderTraversal(node.left);
    console.log(node.val);
    this.inOrderTraversal(node.right);
  }
}

class Node {
  left = null;
  right = null;
  val = null;

  constructor(val) {
    this.val = val;
  }
}
