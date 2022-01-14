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

let sum = 0;

//Funzione numero random

function cpuNum() {
    const rndNum = Math.floor(Math.random() * 5) + 1;

    return rndNum
}

console.log(cpuNum())

buttonElement.addEventListener('click', function () {
    const num = numberElement.value;
    const option = selectElement.value;

    cpuElement.innerText = "Il computer ha scelto: " + cpuNum();


})