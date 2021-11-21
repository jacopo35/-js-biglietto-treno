/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
*/

/*
BONUS
Controllare se l'utente ha inserito i dati nel prompt
*/



// Chiedere all'utente il numero di chilometri che vuole percorrere


let chilometri = parseFloat(prompt('Inserisci il numero di chilometri che vuoi percorrere'));
console.log('Numero di chilometri da percorrere:', chilometri);

// Chiedere all'utente la sua età


let eta = parseInt(prompt('Inserisci la tua età'));
console.log('Età del passeggero:', eta);

// Sulla base di queste informazioni, calcolare il prezzo del biglietto

let costoKm = 0.21;
let prezzoBase = chilometri * costoKm;
console.log('prezzoBase:', prezzoBase);

// Prezzo finale per chi ha tra i 18 e 65 anni

let prezzoFinale = prezzoBase;

// Applicare uno sconto del 20% per i minorenni e del 40% per gli over 65

if (eta < 18) {
    prezzoFinale = (prezzoBase - ((prezzoBase * 20) / 100));
    console.log('prezzoFinale', prezzoFinale);
} else if (eta > 65) {
    prezzoFinale = (prezzoBase - ((prezzoBase * 40) / 100));
    console.log('prezzoFinale', prezzoFinale);
}

// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo)

// Bonus: controllare se l'utente ha inserito dei dati nel prompt
if (chilometri.length == 0 || chilometri == '0') {
    document.getElementById('prezzofinale').innerHTML = 'Non hai inserito i chilometri. Aggiorna la pagina e inserisci i dati corretti.';
} else if (eta.length == 0 || eta == '0') {
    document.getElementById('prezzofinale').innerHTML = 'Non hai inserito la tua età. Aggiorna la pagina e inserisci i dati corretti.';
} else {
    document.getElementById('prezzofinale').innerHTML = 'Il prezzo finale del biglietto è di ' + prezzoFinale.toFixed(2) + '€.';
}

