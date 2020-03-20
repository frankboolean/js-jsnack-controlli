// inserisce prima parola
var prima= prompt("Mi dica una prima parola");

// inserisce seconda
var seconda= prompt("Mi dica seconda parola");
// lunghezza prima

var nPrima= prima.length;
// lunghezza seconda
var nSeconda= seconda.length;

var risp;
// se lunghezza > msg lungh prima
if(nPrima < nSeconda){
  risp= prima + " è la parola più corta mentre " + seconda + " è la parola più lunga"
}else if(nPrima > nSeconda){
  risp= seconda + " è la parola più corta mentre " + prima + " è la parola più lunga"
}
else{
  risp="i due numeri hanno stessa lunghezza"
}


// se lungh < msg lung seconda

document.getElementById('msg').innerHTML= risp
