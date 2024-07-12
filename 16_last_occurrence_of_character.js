// Write a javaScript program to find last occurrence of a character in a given string.


let text = {
    string: "My Name is Vasu",
    search: "a",
    count: 0
}

for (let i = 0; i < text.string.length; i++) {

    if (text.string[i] == text.search) {
        text.count++;
        if (text.count == text.count) {
            text.last_occurrence_char_index = i;
        }

    }
}
console.log(text);