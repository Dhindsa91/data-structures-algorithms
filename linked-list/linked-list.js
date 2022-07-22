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
