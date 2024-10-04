// Write a javaScript program to remove last occurrence of a character in a given string.


let text = {
    string: "My Name is Vasu",
    search: "a",
    newString: ""
}

text['last_index'] = text.string.lastIndexOf(text.search);

for (let i = 0; i < text.string.length; i++) {
    text.newString += text.string[i];
    
    if (i == (text.last_index - 1)) {
        i++;
    }

}




// for (let i = 0; i < text.string.length; i++) {

//     if (text.string[i] == text.search) {
//         text.last_occurrence_char_index = i;

//     }
// }

// let a = text.string.slice(0,text.last_occurrence_char_index);
// let b = text.string.slice((text.last_occurrence_char_index + 1),text.string.length);
// text.string = a + b;

//           |
//          _|_         // Upper code is written at bottom in a single line.
//          \ /
//           V

// text.string = text.string.slice(0, text.last_occurrence_char_index) + text.string.slice((text.last_occurrence_char_index + 1), text.string.length);

console.log(text);