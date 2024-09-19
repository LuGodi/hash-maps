import LinkedList from "./linked_list.js";
//can i extend array
export default class HashMap {
  #bucketSize = 16;
  #buckets;
  //From 0 to 1
  #loadFactor = 0.75;
  constructor() {
    this.#buckets = new Array(this.#bucketSize).fill(null);
  }
  bucketLength() {
    return this.#buckets.length;
  }

  #hash(key) {
    let hash = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hash = (primeNumber * hash + key.charCodeAt(i)) % this.#bucketSize;
    }
    // console.log(hash);
    return hash;
  }

  #growthFactor(loadFactor, capacity) {
    return loadFactor * capacity;
  }

  //a buckets index is actually the hash value
  //whenever we access this.#buckets[hash] we are accessing the linked list instance
  #accessBucket(index) {
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      return this.#buckets[index];
    }
  }
  #setBucket(index, value) {
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      this.#buckets[index] = value;
    }
  }

  //TODO check for bugs

  #grow() {
    const entries = this.entries();
    this.#bucketSize = this.#bucketSize * 2;
    this.#buckets = new Array(this.#bucketSize).fill(null);

    for (const [key, value] of entries) {
      this.set(key, value);
    }
  }
  #checkGrow() {
    if (
      this.length() + 1 >
      this.#growthFactor(this.#loadFactor, this.#bucketSize)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //FIX changing a value is growing the bucket
  set(key, value) {
    //check if key exists in linked list, if it does, overwrite it
    if (this.has(key)) {
      //overwrite it
      this.#overwrite(key, value);
      return;
    }
    if (this.#checkGrow() === true) {
      this.#grow();
    }
    const hash = this.#hash(key);

    let list = this.#accessBucket(hash);
    if (list === null) {
      list = new LinkedList();
      this.#setBucket(hash, list);
    }

    list.append(key, value);
  }
  #overwrite(key, value) {
    const hash = this.#hash(key);
    const list = this.#accessBucket(hash);
    list.delete(key);
    list.append(key, value);
  }
  get(key) {
    const bucketIndex = this.#hash(key);
    const list = this.#accessBucket(bucketIndex);
    if (list === null) return null;
    return list.get(key);
  }

  has(key) {
    const bucketIndex = this.#hash(key);
    const list = this.#accessBucket(bucketIndex);
    if (list === null) return false;
    return list.has(key);
  }

  //if a key gets removed and the linked list within that bucket becomes empty, unlike other empty buckets that hold the value null this one will hold an instance to a linked lists that points to null
  //Should I either init all buckets to contain an empty linked list or remove the instance altogether when theres no more entries?
  remove(key) {
    const bucketIndex = this.#hash(key);
    const list = this.#accessBucket(bucketIndex);
    try {
      list.delete(key);
    } catch (error) {
      if (error.cause === "KeyNotFound") return false;
      throw error;
    }
    return true;
  }

  length() {
    let length = 0;
    for (let bucket of this.#buckets) {
      // console.log(bucket);
      if (bucket !== null) {
        length += bucket.length();
      }
    }
    return length;
  }

  clear() {
    //I can either set all the buckets to hold value null or iterate and clear all the linked lists
    for (
      let bucketIndex = 0;
      bucketIndex < this.#buckets.length;
      bucketIndex++
    ) {
      //I need to make each index of the array point to null
      //I can also use the splice method of the array to empty the array
      //by setting bucket to null im simply grabbing the value inside the bucket and setting it to equal null, its not changing to where the array is pointing
      // bucket = null;
      //lets change it so I can grab the index instead
      this.#setBucket(bucketIndex, null);
    }
  }

  //I should avoid coupling
  //I can either let this here or modify the linked list to have its own keys method
  keys() {
    const keys = [];
    this.#iterate((currentNode, nextNodeFun) => {
      keys.push(currentNode.key);
    });
    return keys;
  }

  //linked list returns an "iterator"
  #iterate(callback) {
    for (let linkedList of this.#buckets) {
      if (linkedList === null) continue;
      const nextNodeFun = linkedList.next();
      let nextNode = nextNodeFun();
      while (nextNode !== null) {
        callback(nextNode, nextNodeFun);
        nextNode = nextNodeFun();
      }
    }
  }

  entries() {
    const entries = [];
    this.#iterate((currentNode, nextNodeFun) => {
      entries.push([currentNode.key, currentNode.value]);
    });

    return entries;
  }
  values() {
    const values = [];
    this.#iterate((currentNode) => {
      values.push(currentNode.value);
    });
    return values;
  }

  toString() {
    let str = "";
    for (const bucket of this.#buckets) {
      if (bucket === null) str += "//null\\\\ \n";
      else {
        str += `//${bucket.toString()}\\\\ \n`;
      }
    }
    return str;
  }
}
