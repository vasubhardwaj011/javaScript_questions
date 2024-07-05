// Write a C program to toggle case of each character of a string

let string_a = "vasubhardwaj011@gmail.com";

let text = "";

for (let i = 0; i < string_a.length; i++) {
    
    if (string_a[i] == string_a[i].toUpperCase()) {
        text += string_a[i].toLowerCase();

    } else {
        text += string_a[i].toUpperCase();
        
    }
}
console.log(text);