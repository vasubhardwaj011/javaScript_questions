// Write a C program to find total number of alphabets, digits or special character in a string.

let a = "demo@123";

let alphabate = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let specialChar = "`~!@#$%^&*()-_=+[]{},.<>;:'/|?";

let text = "";
let num = "";
let spChar = "";
let iter = 1;
let iter2 = 1;
let iter3 = 1;

for (i = 0; i < a.length; i++){
    // console.log(a[i]);

    for (j = 0; j < alphabate.length; j++){
        // console.log(alphabate[j]);
        if (a[i] == alphabate[j]){
            text = iter + " alphabates are there in string";
            iter++;
        }
        
    }
    for (k = 0; k < number.length; k++){
        // console.log(number[k]);
        if (a[i] == number[k]){
            num = iter2 + " numbers are there in string";
            iter2++;
        }
    
    }
    for (l = 0; l < specialChar.length; l++){
        // console.log(specialChar[l]);
        if (a[i] == specialChar[l]){
            spChar = iter3 + " Special characters are there in string";
            iter3++;
        }
    
    }
}
console.log();
console.log(text);
console.log(num);
console.log(spChar);
console.log();