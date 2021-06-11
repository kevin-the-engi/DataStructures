// head pointer
// tail pointer

const DoublyLinkedList = function() {
  const createNode = (value) => {
    let node = {
      value,
      prev: null,
      next: null
    }

    return node;
  }

  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.get = function(index) {
  if (index >= this.length || index < 0 || !index) {
    return -1;
  }

  if (index === 0) {
    return this.head.value;
  }

  if (index === this.length - 1) {
    return this.tail.value;
  }

  let head = this.head;
  let i = 0;

  while (head !== null && i < index) {
    head = head.next;
    i++;
  }

  return head.value;
}

// Insertion − Adds an element at the beginning of the list.

DoublyLinkedList.prototype.addAtHead = function(value) {
  const node = this.createNode(value);

  if (this.head) {
    node.next = this.head;
    this.head.prev = node;
  } else {
    this.tail = node;
  }

  this.head = node;
  this.length++;
}

// Deletion − Deletes an element at the beginning of the list.

DoublyLinkedList.prototype.deleteHead = function() {
  if (this.head) {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }
}

// Insert Last − Adds an element at the end of the list.

DoublyLinkedList.prototype.addAtTail = function(value) {
  if (this.length === 0) {
    return this.addAtHead(value);
  }

  let node = this.createNode(value);
  let prevTail = this.tail;

  this.tail = node;
  prevTail.next = node;
  node.prev = prevTail;
  this.length++;
}

// Delete Last − Deletes an element from the end of the list.

DoublyLinkedList.prototype.deleteTail = function() {
  let prevNode = this.tail.prev;

  this.tail = prevNode;
  prevNode.next = null;
  this.length--;
}

// Insert After − Adds an element after an item of the list.

DoublyLinkedList.prototype.insertAtIndex = function(index, value) {
  if (index > this.length || index < 0 || index === undefined) {
    return;
  }

  if (index === 0) {
    return this.addAtHead(value);
  }

  if (index === this.length) {
    return this.addAtTail(value);
  }

  let node = this.createNode(value);
  let head = this.head;
  let i = 0;

  while (head !== null && i < index) {
    head = head.next;
    i++;
  }

  let prevNode = head.prev;

  prevNode.next = node;
  node.prev = head.prev;
  node.next = head;
  head.prev = node;
  this.length++;
}

// Delete − Deletes an element from the list using the key.

DoublyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.length || index < 0 || index === undefined || this.length === 0) {
    return;
  }

  if (index === 0) {
    if (this.length > 1) {
      this.head.next.prev = null;
    } else {
      this.tail = null;
    }

    this.head = this.head.next;
    this.length--;

    return;
  }

  if (index === this.length - 1) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;

    return;
  }

  let head = this.head;
  let i = 0;

  while (head !== null && i < index) {
    head = head.next;
    i++;
  }

  let nodeToBeDeleted = head;

  nodeToBeDeleted.prev.next = nodeToBeDeleted.next;
  nodeToBeDeleted.next.prev = nodeToBeDeleted.prev;
  this.length--;
}

// Display forward − Displays the complete list in a forward manner.

DoublyLinkedList.prototype.displayForward = function() {
  let head = this.head;

  return this.traversal(head, 1);
}

// Display backward − Displays the complete list in a backward manner.

DoublyLinkedList.prototype.displayBackward = function() {
  let tail = this.tail;

  return this.traversal(tail, -1);
}

DoublyLinkedList.prototype.traversal = function(node, direction) {
  let values = [];

  while (node !== null) {
    values.push(node.value);

    if (direction === 1) {
      node = node.next;
    } else {
      node = node.prev;
    }
  }

  return values;
}
