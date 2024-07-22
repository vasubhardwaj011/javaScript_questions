// Write a javaScript program to remove all occurrences of a character from string.


let text = {
    string: "My Name is Vasuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    search: "a",
    replace_with: ""
}

for (let i = 0; i < text.string.length; i++) {

    if (text.string[i] == text.search) {

        text.string = text.string.replace(text.string[i], text.replace_with);
        i = 0;

    }
}

console.log(text);