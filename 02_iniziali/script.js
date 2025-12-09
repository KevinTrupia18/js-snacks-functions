/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali
 di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function initialLetter (nomi) {
    
    let  initialLetters = [];

    for (let i = 0; i < nomi.length; i++ ) {


        initialLetters.push(nomi[i][0])
        //console.log(nomi[i][0])
    }
    
    
  return initialLetters
}

console.log('ciao')

// Invoca la funzione qui e stampa il risultato in console

console.log(initialLetter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]