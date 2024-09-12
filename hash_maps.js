export default class HashMap {
  #bucketSize = 16;

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
  #accessBucket(bucketIndex) {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }
  //TODO
  set(key, value) {
    const hash = this.hash(key);
  }
}
