// Write a javaScript program to remove all occurrences of a character from string.


let text = {
    string: "My Name is Vasuaaa",
    search: "a",
    replace_with: "",
    count: 0
}

for (let i = 0; i <= text.string.length; i++) {

    if (text.string[i] == text.search) {
        text.count++;
        if (text.count == text.count) {
            text.last_occurrence_char_index = i;

            text.string = text.string.replace(text.string[i], text.replace_with);
        }
        i = 0;

    }
}

console.log(text);