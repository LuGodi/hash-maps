import LinkedList from "./linked_list.js";
//can i extend array
export default class HashMap {
  #bucketSize = 16;
  #buckets;
  constructor() {
    this.#buckets = new Array(16).fill(null);
  }

  hash(key) {
    let hash = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hash = (primeNumber * hash + key.charCodeAt(i)) % this.#bucketSize;
    }
    // console.log(hash);
    return hash;
  }

  //   growNum(loadFactor, size){

  //   }

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
  //TODO check size to see if its time to grow
  set(key, value) {
    const hash = this.hash(key);
    // this.#setBucket(hash, value);
    // console.log("accessing bucket " + this.#accessBucket(hash));
    if (this.#accessBucket(hash) === null) {
      const list = new LinkedList();
      this.#setBucket(hash, list);
      list.append(key, value);
      return;
    }
    //fixed? cant access instance of the new list
    const list = this.#accessBucket(hash);
    // console.log("typeof list is ", list instanceof LinkedList);

    //check if key exists in linked list, if it does, overwrite it
    if (list.has(key)) {
      //overwrite it
      list.delete(key);
    }
    list.append(key, value);
  }
  values() {
    return this.#buckets;
  }
  get(key) {
    const bucketIndex = this.hash(key);
    const list = this.#accessBucket(bucketIndex);
    if (list === null) return null;
    return list.get(key);
  }

  has(key) {
    const bucketIndex = this.hash(key);
    const list = this.#accessBucket(bucketIndex);
    if (list === null) return false;
    return list.has(key);
  }

  remove(key) {
    const bucketIndex = this.hash(key);
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
      console.log(bucket);
      if (bucket !== null) {
        length += bucket.length();
      }
    }
    return length;
  }
}
