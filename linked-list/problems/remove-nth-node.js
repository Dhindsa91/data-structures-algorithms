import { LinkedList } from "../linked-list.js";

/**
 * Remove n-th last node
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 *  @param Input: head = [1,2,3,4,5], n = 2
 *  @param Output: [1,2,3,5]
 *
 *  Logic:
 *  - Have 2 points that move n apart.
 *  - This way you can do it in a single pass.
 *  - once the fast pointer reaches the end, the slow pointer will be at the solution
 * 
 */
function removeNthFromTail(head, n) {
    let fast = head, slow = head;

    for(let i = 0; i < n; i++) fast = fast.next;
    if(!fast) return head.next;

    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next
    return head;
}

const ll = new LinkedList();
ll.appendNode(1);
ll.appendNode(2);
ll.appendNode(3);
ll.appendNode(4);
ll.appendNode(5);

const result = removeNthFromTail(ll.head, 2);
ll.print(result);
