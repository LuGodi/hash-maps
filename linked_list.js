export default class LinkedList {
  head = null;

  append(key, value) {
    if (this.head === null) {
      const newNode = new Node(key, value);
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    //nextNode === null
    const newNode = new Node(key, value);
    currentNode.nextNode = newNode;
  }

  toString() {
    let str = "Head -> ";
    let currentNode = this.head;
    while (currentNode !== null) {
      str += `(key: ${currentNode.key}, value:${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    str += `null`;
    return str;
  }
}

export class Node {
  constructor(key, value, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }

  setNext(nextNode) {
    this.nextNode = nextNode;
  }
  // toString() {
  //   return JSON.stringify(this);
  // }
}
