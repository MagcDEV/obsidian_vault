TAGS: [[LeetCode]], [[Data Structures and Algorithms]], [[Linked List]]


```csharp
   public ListNode Reve(ListNode head) {
        if (head == null) {
            return null;
        }

        ListNode current = head;
        while (current.next != null) {
            current = current.next;
        }
        ListNode tail = current;
        return tail;
    }
```