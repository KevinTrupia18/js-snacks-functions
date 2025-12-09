/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function numberVocals(str) {
   
    const vocals = ["a", "e", "i", "o", "u"];
    let count = 0


    for (let i = 0; i< str.length; i++) {
        if (vocals.includes(str[i])) {
            count++;
        }
    }

    return count
}


// Invoca la funzione qui e stampa il risultato in console

console.log(numberVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)