export class LinkedList {
    head = null
    tail = null;

    appendNode(val){
        let newNode = new Node(val);

        if(!this.head) this.head = newNode;
        else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }

            current.next = newNode;
            newNode.prev = current;
        }
    }

    recursiveAppendNode(val, head){
        let newNode = new Node(val);

        if(!head) return this.head = newNode;

        if(!head.next){
            head.next = newNode;
            newNode.prev = head;
        } else {
            this.recursiveAppendNode(val, head.next)
        }
    }

    print(head){
        if(!head) return;

        console.log(head.val);
        this.print(head.next);
    }

    reverseList(head){
        return this.reverseUtil(head, null);
    }

    reverseUtil(head, next){
        if(head === null) return next;
        let temp = head.next;
        head.next = next;
        return this.reverseUtil(temp, head)
    }

}

class Node {
    val = null;
    next = null;
    prev = null;

    constructor(val, prev = null, next = null){
        this.val = val;
        this.next = next
        this.prev = prev
    }
}
