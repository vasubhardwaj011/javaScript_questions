// Write a javaScript program to check whether a string is palindrome or not.

let a = "254585452";

let text = "";

for(let i = 1; i <= a.length; i++){
    text += a[a.length - i];

}

if (a == text) {
    console.log(a + " is 'Palindrome'");
    
} else {
    console.log(a + " is not 'Palindrome'");
    
}