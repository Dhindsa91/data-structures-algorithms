import { LinkedList } from "../linked-list.js";

function multiply(first, second){
    let N = 1000000007;
    let num1 = 0;
    let num2 = 0;

    while(first !== null || second !== null){
        if(first !== null){
            num1 = (num1*10)%N + first.val;
            first = first.next;
        }

        if(second !== null){
            num2 = (num2*10)%N + second.val;
            second = second.next;
        }
    }
    return ((num1%N)*(num2%N))%N;
}

const ll1 = new LinkedList();
ll1.appendNode(9);
ll1.appendNode(4);
ll1.appendNode(6);
let a = ll1.reverseList(ll1.head);

const ll2 = new LinkedList();
ll2.appendNode(8);
ll2.appendNode(4);
let b = ll2.reverseList(ll2.head)


function multiplyLargeNums(first, second){

    let newList = new LinkedList();

    
    let p2 = second;
    let newListP1 = newList.head

    while(p2){
        let carry = 0;

        let newListP2 = newListP1; 
        let p1 = first;
        
        while(p1){
            mult = (p1.val * p2.val + carry);

            newListP2.val += mul % 10;

            carry = (mult/10) + (newListP2.val/10)
            newListP2.val = newListp2.val & 10;

            p1 = p1.next;
            newListP2 = newListP2.next;

        }

        if(carry > 0){
            newListP2.val += carry;
        }

        newListp1 = newList.next;
        p2 = p2.next;
    }

    let start = newList
    while(start.val === 0){
        newList = start.next;
        start = start.next;
    }

    return newList
}

const result = multiplyLargeNums(a, b);
console.log("Result: ", result);
