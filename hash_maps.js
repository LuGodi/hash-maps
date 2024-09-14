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
    console.log(hash);
    return hash;
  }

  //   growNum(loadFactor, size){

  //   }

  //TODO
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
  set(key, value) {
    const hash = this.hash(key);
    // this.#setBucket(hash, value);
    console.log(this.#accessBucket(hash));
    if (this.#accessBucket(hash) === null) {
      const list = new LinkedList();
      this.#setBucket(hash, list);
      list.append(key, value);
      return;
    }
    //fixed? cant access instance of the new list
    const list = this.#accessBucket(hash);
    console.log(list.toString());
    list.append(key, value);
  }
  values() {
    return this.#buckets;
  }
}
