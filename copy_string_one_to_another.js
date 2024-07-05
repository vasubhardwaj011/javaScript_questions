// Write a javaScript program to copy one string to another string.

let a = "45125125112";
let b = "dgdbdfvegsgd";

let aLength = a.length;
let bLength = b.length;

console.log("String a is = " + a + " and length is = " + aLength);
console.log("String b is = " + b + " and length is = " + bLength);
console.log("");

let c = a;
a = b;
b = c;

console.log("New String a is " + a + " and length is " + a.length);
console.log("New String b is " + b + " and length is " + b.length);
