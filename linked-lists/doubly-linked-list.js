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

}

// Deletion − Deletes an element at the beginning of the list.

DoublyLinkedList.prototype.deleteHead = function() {

}

// Insert Last − Adds an element at the end of the list.

DoublyLinkedList.prototype.addAtTail = function(value) {

}

// Delete Last − Deletes an element from the end of the list.

DoublyLinkedList.prototype.deleteTail = function() {

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
