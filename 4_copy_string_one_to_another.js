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



console.log("");
console.log("");





//.................................................... Here is second approach with "slice()"......................................................

// console.log("Here is second approach with 'slice()'");
// console.log("");


// let x = "45125125112";
// let y = "dgdbdfvegsgd";

// console.log("String x is = " + x + " and length is = " + x.length);
// console.log("String y is = " + y + " and length is = " + y.length);
// console.log("");

// let z = x.slice(0, x.length);
// x = y.slice(0, y.length);
// y = z;



// console.log("New String x is " + x + " and length is " + x.length);
// console.log("New String y is " + y + " and length is " + y.length);
