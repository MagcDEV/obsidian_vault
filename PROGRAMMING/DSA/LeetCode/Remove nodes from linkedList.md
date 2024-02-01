TAGS: [[LeetCode]], [[Data Structures and Algorithms]], [[Linked List]]

```csharp
public class Solution {

    public ListNode RemoveNodes(ListNode head) {

        current = ReverseList(head);

    }

  

    public ListNode ReverseList(ListNode head) {

        ListNode tail = GetTail(head);

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

  

    public ListNode GetTail(ListNode head) {

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

}
```