// Write a javaScript program to find total number of alphabets, digits or special character in a string.

let a = "Vasubhardwaj011@gmail.com";

const alphabet = {
    char : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number : "0123456789",
    special_char : "`~!@#$%^&*()-_=+[]{},.<>;:'/|?"
};

let obj = {}

for (let i = 0; i < a.length; i++){
    if (alphabet.char.includes(a[i])){
        // if (obj['alphabets'] == undefined) {                                                // here is if-else condition
        //     obj['alphabets'] = 1;
        // }else{
        //     obj['alphabets']++;
        // }
        obj['alphabets'] == undefined ? obj['alphabets'] = 1 : obj['alphabets']++;       // here is if-else condition like upper if-else
    }
    if (alphabet.number.includes(a[i])){
        obj['numbers'] == undefined ? obj['numbers'] = 1 : obj['numbers']++;       // here is if-else condition
    }
    if (alphabet.special_char.includes(a[i])){
        obj['special_character'] == undefined ? obj['special_character'] = 1 : obj['special_character']++;       // here is if-else condition
    }
}
console.log(obj);






// ..........................................................3rd time this code was created.....................................................


// Write a javaScript program to find total number of alphabets, digits or special character in a string.

// let a = "Vasubhardwaj011@gmail.com";


// const alphabet = {
//     char : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     number : "0123456789",
//     special_char : "`~!@#$%^&*()-_=+[]{},.<>;:'/|?"
// };

// let obj = {}


// for (let i = 0; i < a.length; i++){
    
//     for (let j = 0; j < alphabet.char.length || j < alphabet.number.length || j < alphabet.special_char.length; j++){
//         // console.log(i);
//         // console.log(j);
//         if (a[i] == alphabet.char[j]){

//             obj['alphabets'] == undefined ? obj['alphabets'] = 1 : obj['alphabets']++;       // here is if-else condition

//         }
//         if (a[i] == alphabet.number[j]){
//             // obj['numbers'] = iter1;
//             // iter1++;
//             obj['numbers'] == undefined ? obj['numbers'] = 1 : obj['numbers']++;       // here is if-else condition
            
//         }
//         if (a[i] == alphabet.special_char[j]){
//             // obj['special_character'] = iter2;
//             // iter2++;
//             obj['special_character'] == undefined ? obj['special_character'] = 1 : obj['special_character']++;       // here is if-else condition

//         }
//     }
// }
// console.log(obj);








// ..........................................................2nd time this code was created.....................................................

// // Write a javaScript program to find total number of alphabets, digits or special character in a string.

// let a = "Vasubhardwaj011@gmail.com";


// const alphabet = {
//     char : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     number : "0123456789",
//     special_char : "`~!@#$%^&*()-_=+[]{},.<>;:'/|?"
// };

// let obj = {}


// for (let i = 0; i < a.length; i++){
    
//     for (let j = 0; j < alphabet.char.length || j < alphabet.number.length || j < alphabet.special_char.length; j++){
//         console.log(i);
//         console.log(j);
//         if (a[i] == alphabet.char[j]){
//             // obj['numbers'] = iter1;
//             // iter1++;
//             obj['alphabets'] == undefined ? obj['alphabets'] = 1 : obj['alphabets']++;       // here is if-else condition

//         }
//         if (a[i] == alphabet.number[j]){
//             // obj['numbers'] = iter1;
//             // iter1++;
//             obj['numbers'] == undefined ? obj['numbers'] = 1 : obj['numbers']++;       // here is if-else condition
            
//         }
//         if (a[i] == alphabet.special_char[j]){
//             // obj['special_character'] = iter2;
//             // iter2++;
//             obj['special_character'] == undefined ? obj['special_character'] = 1 : obj['special_character']++;       // here is if-else condition

//         }
//     }
// }
// console.log(obj);





// ..........................................................1st time this code was created.....................................................

// let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let number = "0123456789";
// let specialChar = "`~!@#$%^&*()-_=+[]{},.<>;:'/|?";

// let text = "";
// let num = "";
// let spChar = "";
// let iter = 1;
// let iter2 = 1;
// let iter3 = 1;

// for (i = 0; i < a.length; i++){
//     // console.log(a[i]);

//     for (j = 0; j < alphabet.length; j++){
//         // console.log(alphabet[j]);
//         if (a[i] == alphabet[j]){
//             text = iter + " alphabets are there in string";
//             iter++;
//         }
        
//     }
//     for (k = 0; k < number.length; k++){
//         // console.log(number[k]);
//         if (a[i] == number[k]){
//             num = iter2 + " numbers are there in string";
//             iter2++;
//         }
    
//     }
//     for (l = 0; l < specialChar.length; l++){
//         // console.log(specialChar[l]);
//         if (a[i] == specialChar[l]){
//             spChar = iter3 + " Special characters are there in string";
//             iter3++;
//         }
    
//     }
// }
// console.log();
// console.log(text);
// console.log(num);
// console.log(spChar);
// console.log();