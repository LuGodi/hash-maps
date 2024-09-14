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
  contains(key) {
    console.log("checking if linked list contains");
    if (this.head === null) return false;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.key === key) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  delete(key) {
    if (this.head === null) throw new Error("list is empy");
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode !== null) {
      if (currentNode.key === key) {
        //node is the head of the linked list
        if (previousNode === null) {
          this.head = currentNode.nextNode;
          return;
        }
        previousNode.nextNode = currentNode.nextNode;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    throw new Error(`key ${key} not found in linked list`);
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
