// Write a javaScript program to count frequency of each character in a string.


let str = {
    str1: "vVasuBhardwaj",                          // It is string which will be written by the user

    final_str: "abcdefghijklmnopqrstuvwxyz"
}

str.str1 = str.str1.padStart((str.str1.length + 1), str.str1[0]).toLowerCase();        // This line convert all char into lowercase char and will read all index including index [0].
let str2 = str.str1.split("");            // This line converts the string into new array


let obj = {
    count: 0,
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
console.log(obj);