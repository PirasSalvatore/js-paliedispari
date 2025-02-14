/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

// data user
const userWord = prompt("inserisci una parola")

//check palindrome word
const result = isPalindrome(userWord)

// check result
if (result) {
    console.log(`la parola ${userWord} è una parola palindroma`);
} else {
    console.log(`la parola ${userWord} non è una parola palindroma`);
}

// function declaration

function isPalindrome(word) {
    let checkPalindrome = true

    for (i = 0, y = word.length - 1; i < Math.floor(word.length / 2); i++, y--) {
        if (word[i] !== word[y]) {
            checkPalindrome = false
            break
        }
    }

    return checkPalindrome;
}