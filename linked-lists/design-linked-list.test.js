const linkedList = require('./design-linked-list.js');

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

describe('Linked List', () => {
  const list = new linkedList();

  const getNodes = () => {
    const nodes = [];
    let head = list.head;

    while (head !== null) {
      nodes.push(head.value);
      head = head.next;
    }

    return nodes;
  }

  test('Instantiate a new list', () => {
    expect(list.head).toBe(null);
  })

  test('New node added to head with addAtHead', () => {
    list.addAtHead(2);
    expect(list.head.value).toBe(2);

    list.addAtHead(1);
    expect(list.head.value).toBe(1);

    expect(list.length).toBe(2);

    expect(JSON.stringify(getNodes())).toBe('[1,2]')
  })

  test('Get function to return -1 if invalid', () => {
    expect(list.get(100)).toBe(-1);
    expect(list.get(-10)).toBe(-1);
  })

  test('New node added to tail with addAtTail', () => {
    list.addAtTail(3);
    expect(list.get(2)).toBe(3);

    expect(JSON.stringify(getNodes())).toBe('[1,2,3]')
  })

  test('New node added at index with addAtIndex', () => {
    list.addAtIndex(1, 5);
    expect(list.get(1)).toBe(5);
    expect(JSON.stringify(getNodes())).toBe('[1,5,2,3]')

    list.addAtIndex(0, 7);
    expect(list.head.value).toBe(7);
    expect(JSON.stringify(getNodes())).toBe('[7,1,5,2,3]')

    expect(list.addAtIndex(100, 1)).toBe(undefined);
    expect(list.addAtIndex(-10, 1)).toBe(undefined);
  })

  test('Node to be deleted with deleteAtIndex', () => {
    expect(JSON.stringify(getNodes())).toBe('[7,1,5,2,3]')
    expect(list.length).toBe(5);
    expect(list.get(1)).toBe(1);

    list.deleteAtIndex(1);
    expect(list.length).toBe(4);
    expect(list.get(1)).toBe(5);
    expect(JSON.stringify(getNodes())).toBe('[7,5,2,3]')

    list.deleteAtIndex(0);
    expect(list.length).toBe(3);
    expect(list.get(1)).toBe(2);
    expect(JSON.stringify(getNodes())).toBe('[5,2,3]')
  })
})
