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
  get(key) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
  }
  has(key) {
    // console.log("checking if linked list has " + key);
    if (this.head === null) return false;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.key === key) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  delete(key) {
    if (this.head !== null) {
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
    }
    throw new Error(`key ${key} not found in linked list`, {
      cause: "KeyNotFound",
    });
  }
  toString() {
    let str = "[Head -> ";
    let currentNode = this.head;
    while (currentNode !== null) {
      str += `(key: ${currentNode.key}, value:${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    str += `null]`;
    return str;
  }
  length() {
    //not necessary to check if head is empty
    // if (this.head === null) return 0;
    let currentNode = this.head;
    let length = 0;
    while (currentNode !== null) {
      length += 1;
      currentNode = currentNode.nextNode;
    }
    return length;
  }

  //an attempt to make a useful method for iterating the linked list from the hashmap
  next() {
    let currentNode = 0;
    return () => {
      if (currentNode === 0) {
        currentNode = this.head;
      } else if (currentNode === null) {
        throw new Error("iterator exhausted");
      } else {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    };
  }
}

export class Node {
  key = null;
  value = null;
  nextNode = null;
  constructor(key, value, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }

  setNext(nextNode) {
    this.nextNode = nextNode;
  }
  toString() {
    return `key : ${this.key}, value: ${
      this.value
    }, nextNode: ${this.nextNode.toString()}`;
  }
}
