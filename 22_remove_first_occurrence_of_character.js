// Write a javaScript program to remove first occurrence of a character in a given string.


let text = {
    string: "My Name is Vasu",
    search: "a",
    count: 0
}

for (let i = 0; i < text.string.length; i++) {

    if (text.string[i] == text.search) {
        text.count++;
        if (text.count == 1) {
            text.first_occurrence_char_index = i;
        }

    }
}
console.log(text);          // string without remove first occurrence

text.string = text.string.replace(text.string[text.first_occurrence_char_index], "");          // removing first occurrence

console.log(">>>>>>   string after remove the first occurrence of " + text.search + " = " + text.string);

console.log(text);          // string after remove first occurrence