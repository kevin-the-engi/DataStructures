class Stack {
  constructor(){
    this.storage = [];
  }
  peek() {
    return this.storage[this.storage.length - 1];
  }
  push(value){
    this.storage.push(value)
  }
  pop(){
    this.storage.pop();
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
