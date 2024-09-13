import HashMap from "./hash_maps.js";
import LinkedList from "./linked_list.js";
console.log("hi");
// const hm = new HashMap();

// hm.hash("banano");
// hm.hash("Banano");
// hm.hash("ananoB");
// hm.hash("cat");
// hm.hash("a");
// hm.hash("b");

const lList = new LinkedList();
console.log(lList.toString());

console.log(lList);
lList.append("age", "13");

lList.append("age", "15");
lList.append("age", "17");
console.log(lList);
console.log(lList.toString());
