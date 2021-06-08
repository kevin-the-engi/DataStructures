/**
 * Initialize your data structure here.
 */
 var MyLinkedList = function() {
  // For creating a new node with a given value parameter and next set to null value
  this.createNode = value => {
    let node = {
      value,
      next: null
    };

    return node;
  }

  // If null, represents the top of the list
  // Only exists upon instantiation of new MyLinkedList
  this.head = null;

  // Tracks number of nodes in list, useful for get/insertion/deletion and for edge checks
  this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  // Track current node position
  // Traverse list until position matches index
    // return the value of the node

  // If index is 0, just return head value
  if (index === 0) {
    return this.head.value;
  }

  // If index is not a valid number, then return -1
  if (index >= this.length || index < 0) {
    return -1;
  }

  // Create a ref to head for traversal
  let head = this.head;
  // Track current node position/index
  let i = 0;

  // Traverse list using ref and loop until end of list is reached which is represented by null value
  while (head !== null) {
    // Check if current position is same as given index
    // If it is, then current node is the node we need and can break loop
    if (i === index) {
      return head.value;
    }

    // Traverse: next node becomes current node and increment position
    head = head.next;
    i++;
  }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  // Create a new node to be added to list
  let node = this.createNode(val);

  // Check if head node exists
    // if yes then the list is attached to the new node
  if (this.head) {
    node.next = this.head;
  }

  // Head is updated with current list or node
  this.head = node;
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  // create new node
  // traverse list until next is null
    // attach node to next

  // Check if list doesn't exist
    // if yes then call addAtHead to add node to head
  if (!this.head) {
    return this.addAtHead(val);
  }

  let node = this.createNode(val);

  // Reference to head for traversal
  let head = this.head;

  // Traverse until list reaches the end
  while (head.next !== null) {
    head = head.next;
  }

  head.next = node;
  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  // Check if index is valid
  // if index is greater than length or less than 0
    // return

  // check if index is 0
    // if yes then call addToHead

  // check if index is same as length which means it's the last position
    // if yes then call addToTai

  if (index > this.length || index < 0) {
    return;
  }

  if (index === 0) {
    return this.addAtHead(val);
  }

  if (index === this.length) {
    return this.addAtTail(val);
  }

  // Create new node with val
  // Create i to track position

  let node = this.createNode(val);
  let i = 0;
  let head = this.head;

  // traverse list until next is null
    // check if i is 1 less than index
      // if yes then break to be one node before index for insertion

  while (head.next) {
    if (index - 1 === i) {
      break;
    }

    head = head.next;
    i++;
  }

  // update node.next with head.next node
  // update current head.next with new node
  // increment length

  node.next = head.next;
  head.next = node;
  this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  // Check if index is valid
  if (index >= this.length || index < 0) {
    return;
  }

  // If index is 0, then head needs to be updated with next node

  if (index === 0) {
    this.head = this.head.next;
    this.length--;

    return;
  }

  // Create reference for traversal and create i to track current position
  let head = this.head;
  let i = 0;

  // Traverse list if next is null or current is null
    // check if position is 1 less than index
      // then break to be parent node of given index
  while (head !== null || head.next !== null) {
    if (index - 1 === i) {
      break;
    }

    head = head.next;
    i++;
  }

  // update current head node next with next next node
  head.next = head.next.next;

  this.length--;
};

module.exports = MyLinkedList;

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */