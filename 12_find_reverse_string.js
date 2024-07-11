// Write a javaScript program to find reverse of a string.

let a = "vasu bhardwaj shiv";

let text = "";

for(let i = 1; i <= a.length; i++){
    text += a[a.length - i];

}
console.log(text);