// Write a javaScript program to find all occurrence of a character in a given string.


let text = {
    string: "My Name is Vasu aaaaaaaaaa",
    search: "a",
    count: 0,
    all_occurrence_char_index: ""
}


for (let i = 0; i < text.string.length; i++) {

    if (text.string[i] == text.search) {
        text.count++;
        // console.log(text.count);
        if (text.count = text.count) {
            text.all_occurrence_char_index += i + ", ";
        }

    }
}
console.log(text);