// Write a C program to toggle case of each character of a string

let input = "vasubhardwaj011@gmail.com";

let text = "";

for (let i = 0; i < input.length; i++) {
    
    if (input[i] == input[i].toUpperCase()) {
        text += input[i].toLowerCase();

    } else {
        text += input[i].toUpperCase();
        
    }
}
console.log(text);