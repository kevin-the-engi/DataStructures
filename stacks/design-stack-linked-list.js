class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    let node = new Node(value);

    if (this.length === 0) {
      this.bottom = node;
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;
  }
  pop(){
    if (this.length === 0) {
      return null;
    }

    this.top = this.top.next;
    this.length--;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push(1)
myStack.push(3)
myStack.push(2)
console.log(myStack.peek())
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack.peek())
