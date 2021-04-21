/*
Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/            

var numbersCom = [];
var userNumbers = [];

//Creo 5 numeri random-★
while(numbersCom.length < 5) {
    var noCom = Math.floor(Math.random() * 100) + 1;    
        if (numbersCom.indexOf(noCom) === -1) {            
            numbersCom.push(noCom)
    }   
}
console.log(numbersCom)

/*---------------alternativa--ciclo--if-----------
for (var i = 0; i < 5; i++) {
     var noCom =  Math.floor(Math.random() * 100) + 1;
       if(numbersCom.includes(noCom)){
            i--
          }
          numbersCom.push(noCom);    
}------------------------------------------------*/


//Li mostro nell'alert
alert(numbersCom);

var secondi = 5;

setTimeout(function () {
    console.log("Mancano" + secondi + "secondi")

    userInput(userNumbers)   //chiedo 5 numeri all'user

    //Confronto i due array
    if(numbersCom.sort().join(',')=== userNumbers.sort().join(',')){
        alert('win');
    }
    else alert('lose');

}, secondi * 1000)


function userInput(y){
    while(y.length < 5) {
        var x = prompt();
        y.push(x)
    }
}











