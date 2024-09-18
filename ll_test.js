import LinkedList from "./linked_list.js";

const l = new LinkedList();
l.append("cat");
l.append("dog");
// console.log(l.toString());
const nextNode = l.next();
console.log(nextNode());
console.log(nextNode());
console.log(nextNode());
console.log(nextNode());
