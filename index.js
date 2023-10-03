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
      return null;
    } else {
      return this.head;
    }
  }

  getTail() {
    if (!this.head) {
      return null;
    } else {
      return this.tail;
    }
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

console.log(list);
