// Write a javaScript program to count total number of words in a string.

let a = "This is my laptop. This is my laptop, This is my laptop? This is my laptop' This is my laptop!"


const sentence = {
    space: " ",

}

let obj = {};

// let stLength = a.length;
// console.log(stLength);
// console.log(a[stLength - stLength]);
// console.log(a[stLength - stLength] == " ");


if (a[a.length - 1] == " ") {
    console.log("Please remove space from the 'last' of your sentence and complete your sentence with .,?!");

} else if (a[a.length - a.length] == " ") {
    console.log("Please remove space from the 'start' of your sentence");

} else {
    let text = "";
    for (let i = 0; i < a.length; i++) {
        if ((a[(i - 1)] + a[i]) == "  ") {
            text = "Please remove space from the 'middle' of your sentence after =>>> " + a[i - 10] + a[i - 9] + a[i - 8] + a[i - 7] + a[i - 6] + a[i - 5] + a[i - 4] + a[i - 3];

        } else {
            if (sentence.space.includes(a[i])) {
                obj['words'] == undefined ? obj['words'] = 2 : obj['words']++;
            }
        }
    }
    if (text) {
        console.log(text);

    } else {
        console.log(obj);

    }
}