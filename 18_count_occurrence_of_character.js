// Write a javaScript program to count occurrence of a character in a given string.


let text = {
    string: "My Name is Vasu",
    search: "o",
    count: 0
}

for (let i = 0; i < text.string.length; i++) {

    if (text.string[i] == text.search) {
        text.count++;
        // console.log(text.count);
    }
}
console.log(text);