import HashMap from "./hash_maps.js";
import LinkedList from "./linked_list.js";

const test = new HashMap(); // or HashMap() if using a factory

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log("num of entries", test.length());
console.log("num of buckets", test.bucketLength());
console.log(test.entries());
console.log(test.toString());
test.set("banana", "overwritten");
test.set("carrot", "overwritten");
console.log("overwritten");
console.log("num of entries", test.length());
console.log("num of buckets", test.bucketLength());
console.log(test.toString());
console.log("----add new value should increase hashmap");
test.set("gatinho", "lovely");
console.log("num of entries", test.length());
console.log("num of buckets", test.bucketLength());
console.log(test.entries());
console.log(test.toString());
test.set("gatino", "lovely");
test.set("Gatino", "lovely");
test.set("GatinO", "lovely");
test.set("GatInO", "lovely");

console.log(test.bucketLength());
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.toString());
test.remove("gatino");
console.log(test.length());
console.log(test.toString());
