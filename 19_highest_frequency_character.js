// Write a C program to find highest frequency character in a string


let str = {
    str1: "VasuBhardwaj",                          // It is string which will be written by the user
    
    final_str: "abcdefghijklmnopqrstuvwxyz"
}

let str2 = str.str1.split("");            // This line converts the string into new array
str.str1 = str.str1.toLowerCase();        // This line convert all char into lowercase char

let obj = {
    count: 0,
    frequency: 0,
    char: ""
}

for (let i = 0, j = 0; i < str.str1.length; i++) {

    if (str2[j] == str.str1[i]) {
        obj.count++;

    }
    if (i == (str.str1.length - 1) && j <= (str2.length - 1)) {
        obj[str2[j]] = obj.count;

        obj.count = 0;
        i = 0;
        j++;

    }
}
// console.log(obj);

for (let i = 0; i < str.final_str.length; i++) {

    if (obj[str.final_str[i]] > obj.frequency) {
        obj.frequency = obj[str.final_str[i]];
        obj.char = str.final_str[i];
        // console.log(obj.char);
    }
}
console.log("Highest frequency character is = " + obj.char + ", frequency is = " + obj.frequency);