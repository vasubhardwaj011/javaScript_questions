// Write a javaScript program to remove all repeated characters from a given string.

text = {
    string: "Vasu Bhardwaj",
    search: "a",
    count: 0,
    newString: ""
}


for (i = 0; i < text.string.length; i++){

    if (text.string[i] == text.search){
        text.count++;
    }

    if (text.string[i] !== text.search) {
        text.newString += text.string[i];

    }else if (text.count == 1) {
        text.newString += text.string[i];
        
    }

}

console.log(text);