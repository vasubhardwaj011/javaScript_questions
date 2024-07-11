// Write a javaScript program to reverse order of words in a given string.

let a = "this is my home";

a = a.split(" ");


let text = "";

for (i = 1; i <= a.length; i++){
    text += a[a.length - i] + " ";
    
}

text = text.trimEnd();
console.log(text);

