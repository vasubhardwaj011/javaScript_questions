// Write a javaScript program to count total number of vowels and consonants in a string.

let a = "Vasu Bhardwaj";

const alphabet = {
 vowels : "aeiouAEIOU",
 consonants : "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
};

let myobj = {};

for (let i = 0; i < a.length; i++) {
    if(alphabet.vowels.includes(a[i])){
        myobj['vovels'] == undefined ? myobj['vovels'] = 1 : myobj['vovels']++; 
    }
    if(alphabet.consonants.includes(a[i])){
        myobj['consonants'] == undefined ? myobj['consonants'] = 1 : myobj['consonants']++;
    }
}
console.log(myobj);





// Write a javaScript program to count total number of vowels and consonants in a string.

// let a = "aeiouabcdefghij";

// let vowels = "aeiouAEIOU";
// let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

// let text = "";
// let text1 = "";

// iter = 1;
// iter1 = 1;

// for (let i = 0; i < a.length; i++) {

//     for (let j = 0; j < vowels.length; j++) {
//         // console.log(vowels[j]);
//         if (a[i] == vowels[j]) {
//             text = iter + " vowels are there in this string";
//             iter++;

//         }

//     }
//     for (let k = 0; k < consonants.length; k++) {
//         // console.log(consonants[k]);
//         if (a[i] == consonants[k]) {
//             text1 = iter1 + " consonants are there in this string";
//             iter1++;

//         }

//     }


// }

// console.log();
// console.log(text);
// console.log(text1);
// console.log();