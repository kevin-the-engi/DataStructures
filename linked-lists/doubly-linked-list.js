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

}

// Delete − Deletes an element from the list using the key.

DoublyLinkedList.prototype.deleteAtIndex = function(index, value) {

}

// Display forward − Displays the complete list in a forward manner.

DoublyLinkedList.prototype.displayForward = function() {

}

// Display backward − Displays the complete list in a backward manner.

DoublyLinkedList.prototype.displayBackward = function() {

}
