import { LinkedList } from "../linked-list.js";

const ll = new LinkedList();
ll.recursiveAppendNode(1, ll.head);
ll.recursiveAppendNode(2, ll.head);
ll.recursiveAppendNode(3, ll.head);
ll.recursiveAppendNode(4, ll.head);

console.log(ll.head.next);