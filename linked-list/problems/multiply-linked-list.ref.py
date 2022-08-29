def multiplyTwoLists(first, second):
    m = reverse(first)
    n = reverse(second)
 
    result = make_empty_list(m + n + 1)
 
    second_ptr = second.head
    result_ptr1 = result.head
 
    while(second_ptr != None):
        carry = 0

        result_ptr2 = result_ptr1
        first_ptr = first.head
 
        while(first_ptr != None):
             
            mul = ((first_ptr.data) *
                  (second_ptr.data) + carry)
 
            result_ptr2.data += mul % 10

            carry = ((mul // 10) +
                     (result_ptr2.data // 10))
            result_ptr2.data = result_ptr2.data % 10
 
            first_ptr = first_ptr.next
            result_ptr2 = result_ptr2.next
 
        if(carry > 0):
            result_ptr2.data += carry
 
        result_ptr1 = result_ptr1.next
        second_ptr = second_ptr.next
 
    reverse(result)
    reverse(first)
    reverse(second)
 
    start = result.head
    while(start.data == 0):
        result.head = start.next
        start = start.next
 
    return result