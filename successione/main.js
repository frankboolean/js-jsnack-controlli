

// utente sceglie primo numero
var primo= parseInt(prompt("Scelga un numero"));

// sceglie secondo numero
var secondo= parseInt(prompt("Ora scelga un secondo numero"));
// risultato
var totalePrimo= primo;

var totaleSecondo= secondo;
// se risultato primo num maggiore secondo
var msg;

if (totalePrimo > totaleSecondo){
  msg= "Il primo numero da lei è scelto è maggiore del secondo";
} else if (totalePrimo < totaleSecondo){
  msg="Il secondo numero da lei scelto è maggiore del primo";
}else {
  msg="i due numeri da lei scelti sono uguali"
}



document.getElementById('messaggio').innerHTML= msg;
