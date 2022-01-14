/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto */


//target elementi dom

const numberElement = document.getElementById("user-number");
const selectElement = document.getElementById("select");
const buttonElement = document.getElementById("button");
const cpuElement = document.getElementById("cpu-element");
const resultElement = document.getElementById("result-element");
const winnerElement = document.getElementById("winner-element");
const loserElement = document.getElementById("loser-element");
let sum = 0;

//Funzione numero random

function cpuNum(min, max) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    return rndNum
}

console.log(cpuNum(1, 5))

buttonElement.addEventListener('click', function () {
    const userNumber = parseInt(numberElement.value);
    const cpuNumber = parseInt(cpuNum(1, 5))
    const option = selectElement.value;

    if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
        alert("Inserisci un numero da 1 a 5!")
    } else {


        cpuElement.innerText = "Il computer ha scelto: " + cpuNumber;
        sum = userNumber + cpuNumber;
        let evenOdd = pod(sum);

        resultElement.innerText = "La somma dei vostri numeri è " + sum;

        if (option == evenOdd) {
            winnerElement.innerText = "Hai vinto!";
            loserElement.innerText = "";
        } else {
            loserElement.innerText = "Hai perso!"
            winnerElement.innerText = "";
        }

        /* if (option == "dispari" && sum % 2) {
            winnerElement.innerText = "Hai vinto!";
            loserElement.innerText = "";
        } else if (option == "pari" && sum % 2) {
            loserElement.innerText = "Hai perso!"
            winnerElement.innerText = "";
        } else if (option == "pari" && sum % 2 == 0) {
            winnerElement.innerText = "Hai vinto!"
            loserElement.innerText = "";
        } else {
            loserElement.innerText = "Hai perso!"
            winnerElement.innerText = "";
        } */
    }
})

// restituisce pari o dispari
function pod(numero) {
    if (numero % 2 == 0)
        return "pari";
    else
        return "dispari";
}