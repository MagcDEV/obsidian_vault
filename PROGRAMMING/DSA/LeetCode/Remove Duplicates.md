TAGS: [[LeetCode]], [[Data Structures and Algorithms]], [[Linked List]]

LL: Remove Duplicates ( ** Interview Question)

You are given a singly linked list that contains integer values, where some of these values may be duplicated.

**Note: this linked list class does NOT have a** `**tail**` **which will make this method easier to implement.**

Your task is to implement a method called `**removeDuplicates()**` within the LinkedList class that removes all duplicate values from the list.  
  
Your method should not create a new list, but rather modify the existing list in-place, preserving the relative order of the nodes.

Example:

Input:

LinkedList: 1 -> 2 -> 3 -> 1 -> 4 -> 2 -> 5

Output:

LinkedList: 1 -> 2 -> 3 -> 4 -> 5

```java
public void removeDuplicates() {
	Set<Integer> values = new HashSet<>();
	Node previous = null;
	Node current = head;
	while (current != null) {
		if (values.contains(current.value)) {
		previous.next = current.next;
		length -= 1;
		} else {
		values.add(current.value);
		previous = current;
		}
		current = current.next;
	}
}
```