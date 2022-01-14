/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// const userWord = prompt("Inserisci una parola").trim();
const inputElement = document.getElementById("word");
const buttonElement = document.getElementById("button");
const displayElement = document.getElementById("display-element");

function isPalindrome(stringa) {
    // divido la stringa in lettere
    const splitWord = stringa.split('');
    console.log(splitWord)
    // Parola in reverse
    const reverseWord = splitWord.reverse()
    console.log(reverseWord)
    // unisco lettere da array a stringa di nuovo
    const reverseString = reverseWord.join('');
    console.log(reverseString)

    //condizione se è palindroma
    if (stringa === reverseString) {
        return true
    }
    return false
}




buttonElement.addEventListener('click', function () {
    const userWord = inputElement.value;

    if (isPalindrome(userWord) === true) {
        displayElement.innerHTML = `La parola è palindrome`
    } else {
        displayElement.innerHTML = `La parola non è palindrome`
    }

    console.log(isPalindrome(userWord));
})
