TAGS: [[LeetCode]], [[Data Structures and Algorithms]], [[Linked List]]


```csharp
   public ListNode ReverseList(ListNode head) {
        ListNode temp = head;
        head = tail;
        tail = temp;
        ListNode after = temp.next;
        ListNode before = null;
        while (after != null) {
            after = temp.next;
            temp.next = before;
            before = temp;
            temp = after;
        }
        return head;

    }
```