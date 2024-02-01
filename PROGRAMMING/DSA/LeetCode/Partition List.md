TAGS: [[LeetCode]], [[Data Structures and Algorithms]], [[Linked List]]

You have a singly linked list **that** **DOES NOT HAVE A TAIL POINTER  (which will make this method simpler to implement)**.  
  
Given a value `**x**` you need to rearrange the linked list such that all nodes with a value less than `**x**` come before all nodes with a value greater than or equal to `**x**`.  
  
Additionally, the relative order of nodes in both partitions should remain unchanged.

Constraints:

1. The solution should traverse the linked list at most once.
2. The solution should not create a new linked list.

**Input:**

A singly linked list and an integer `**x**`.

  
**Output:**

The same linked list but rearranged as per the above criteria.

**Details:**

The function `**partitionList**` takes an integer `**x**` as a parameter and modifies the current linked list in place according to the specified criteria. If the linked list is empty (i.e., `**head**` is `**null**`), the function should return immediately without making any changes.

Example 1:

**Input:**

Linked List: `**3 -> 8 -> 5 -> 10 -> 2 -> 1**` x: `**5**`

**Process:**

- Values less than 5: `**3**`, `**2**`, `**1**`
    
- Values greater than or equal to 5: `**8**`, `**5**`, `**10**`
    

**Output:**

Linked List: `**3 -> 2 -> 1 -> 8 -> 5 -> 10**`

  

Example 2:  
**Input:**

Linked List: `**1 -> 4 -> 3 -> 2 -> 5 -> 2**` x: `**3**`

**Process:**

- Values less than 3: `**1**`, `**2**`, `**2**`
    
- Values greater than or equal to 3: `**4**`, `**3**`, `**5**`
    

**Output:**

Linked List: `**1 -> 2 -> 2 -> 4 -> 3 -> 5**`

  

  

**Tips:**

1. While traversing the linked list, maintain two separate chains: one for values less than `**x**` and one for values greater than or equal to `**x**`.
    
2. Use dummy nodes to simplify the handling of the heads of these chains.
    
3. After processing the entire list, connect the two chains to get the desired arrangement.
    

  

**Note:**

The solution must maintain the relative order of nodes. For instance, in the first example, even though `**8**` appears before `**5**` in the original list, the partitioned list must still have `**8**` before `**5**` as their relative order remains unchanged.  
  
**Note:**

You must solve the problem **WITHOUT MODIFYING THE VALUES** in the list's nodes (i.e., only the nodes' `**next**` pointers may be changed.)




```java
1. public void partitionList(int x) {
2. // Step 1: Check for an empty list.
3. // If the list is empty, there is nothing
4. // to partition, so we exit the method.
5. if (head == null) return;

7. // Step 2: Create two dummy nodes.
8. // These dummy nodes act as placeholders
9. // to simplify list manipulation.
10. Node dummy1 = new Node(0);
11. Node dummy2 = new Node(0);

13. // Step 3: Initialize pointers for new lists.
14. // 'prev1' and 'prev2' will track the end nodes of
15. // the two lists that are being created.
16. Node prev1 = dummy1;
17. Node prev2 = dummy2;

19. // Step 4: Start with the head of the original list.
20. Node current = head;

22. // Step 5: Iterate through the original list.
23. while (current != null) {

25. // Step 6: Compare current node value with 'x'.
26. // Nodes are partitioned based on their value
27. // being less than or greater than/equal to 'x'.

29. // Step 6.1: If value is less than 'x',
30. // add node to the first list.
31. if (current.value < x) {
32. prev1.next = current; // Link node to the end of the first list.
33. prev1 = current; // Update the end pointer of the first list.
34. } else {
35. // Step 6.2: If value is greater or equal,
36. // add node to the second list.
37. prev2.next = current; // Link node to the end of the second list.
38. prev2 = current; // Update the end pointer of the second list.
39. }

41. // Move to the next node in the original list.
42. current = current.next;
43. }

45. // Step 7: Terminate the second list.
46. // This prevents cycles in the list.
47. prev2.next = null;

49. // Step 8: Connect the two lists.
50. // The first list is followed by the second list.
51. prev1.next = dummy2.next;

53. // Step 9: Update the head of the original list.
54. // The head now points to the start of the first list.
55. head = dummy1.next;
56. }
```