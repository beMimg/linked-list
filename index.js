/* eslint-disable */

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  getHead() {
    if (!this.head) {
      return;
    } else {
      return this.head;
    }
  }

  getTail() {
    if (!this.head) {
      return;
    } else {
      return this.tail;
    }
  }

  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        return current.value;
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    let current = this.head;
    let previous = null;
    while (current.nextNode != null) {
      previous = current;
      current = current.nextNode;
    }
    this.tail = previous;
    if (previous === null) {
      this.head = null;
    } else {
      previous.nextNode = null;
    }
    this.length--;
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

list.append(100);
list.append(200);
list.append(300);
list.prepend(99);
list.prepend(96);
list.append(444);
list.prepend(1);
list.pop();
console.log(list);
