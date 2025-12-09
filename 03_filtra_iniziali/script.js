/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo 
le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.


function Letters(nomi, lettera) {
  let letters = [];

  for (let i = 0; i < nomi.length; i++) {
    if (nomi[i][0].toLowerCase() === lettera.toLowerCase()) {
      letters.push(nomi[i]);
    }
  }

  return letters;
}



// Invoca la funzione qui e stampa il risultato in console

console.log(Letters(names, 'A'))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]