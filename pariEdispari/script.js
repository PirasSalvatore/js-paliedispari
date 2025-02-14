/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5

const userChoise = prompt("sceglia pari o dispari")
const userNumber = Number(prompt("scegli un numero tra 1 e 5"))

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)

const pcNumber = Number(generatNumber(1, 5))

/* // controllo i due numeri
console.log(`${userNumber} ${pcNumber} numeri giocati`);
 */

// Sommiamo i due numeri e stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

const result = isEvenOrOdd(userNumber, pcNumber)


// Dichiariamo chi ha vinto.

if (userChoise === result) {
    console.log("congratulazioni hai vinto");
} else {
    console.log("mi dispiace hai perso");
}



// Function declaration

function generatNumber(min, max) {
    return Math.floor(((Math.random() * 10) % max) + min)
}

function isEvenOrOdd(numOne, numTwo) {
    const checkEvenOrOdd = (numOne + numTwo) % 2

    // console.log(checkEvenOrOdd + " " + numOne + " " + numTwo);

    if (checkEvenOrOdd === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}