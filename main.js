import HashMap from "./hash_maps.js";
import LinkedList from "./linked_list.js";
console.log("hi");
const hm = new HashMap();
console.log(hm);
console.log(hm.values().toString());
hm.set("dog", "peter");

hm.set("cat", "tails");
console.log(hm.values().toString());
console.log("adding key dog");
hm.set("dog", "parker");
console.log(hm.values().toString());
console.log("-------");
hm.clear();
console.log(hm.values());
console.log(hm.length());

// hm.hash("banano");
// hm.hash("Banano");
// hm.hash("ananoB");
// hm.hash("cat");
// hm.hash("a");
// hm.hash("b");

// const lList = new LinkedList();
// console.log(lList.length());
// console.log(lList.toString());

// lList.delete("b");
// lList.append("a", "13");

// lList.append("b", "15");
// lList.append("c", "17");

// console.log("list length", lList.length());
// lList.delete("a");
// console.log("list length", lList.length());
// lList.delete("b");
// console.log("list length", lList.length());
// lList.delete("c");
// console.log("list length", lList.length());
// console.log(lList.toString());
// console.log(lList.toString());
