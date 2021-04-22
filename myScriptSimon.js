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


alert("Memorizza i numeri e riscrivili");

var numbersCom = [];
var userNumbers = [];
var response 


//Creo 5 numeri random
while(numbersCom.length < 5) {
    var noCom = Math.floor(Math.random() * 99) + 1;    
        if (numbersCom.indexOf(noCom) === -1) {            
            numbersCom.push(noCom)
    }   
}
console.log(numbersCom)

//Li mostro nell'alert
alert(numbersCom);

//parte il cronometro
var secondi = 5;

var clock = setInterval(function (){  
      secondi --;
        if (secondi > 0 ) {        //countdown prima dello 0                  
            document.getElementById("timer").innerHTML = ("Mancano " + secondi + " secondi")

        } else if (secondi === 0) {  
             clearInterval(clock);           //fermo la funzione
             userInput(userNumbers);        //ora posso prendere i numeri dall'utente


             
        if (userNumbers.length === 5) {                                //solo quando il secondo array è compilato
            var response = (comparison(numbersCom, userNumbers));      //confronto i due array
                document.getElementById("result").innerHTML = ("Hai ricordato i numeri " + response );
                document.getElementById("result-2").innerHTML = (response.length + " su 5")

                    if(response.length  === 0){
                        document.getElementById("result").innerHTML = ("Non hai ricordato alcun numero");                  
                    } else if (response.length === 5){
                        document.getElementById("result-3").innerHTML = ("Che memoria!");                  
                    }
        }
      }
}, 1000);


//funzione per prendere gli input dall'utente
    function userInput(y){
        while(y.length < 5) {
            var x = parseInt(prompt("Inserisci i numeri che ricordi" + " (inseriti " + y.length + " su 5)" ));   
            if (isNaN(x) || (x === "")){
                alert("Inserisci un numero")
            } else{y.push(x)}      
        }
    }

//funzione per paragonare due array
    function comparison(arr1, arr2){
        arr1.sort();
        arr2.sort();
        arr3 = [];
        for(var i = 0; i< arr1.length; i+= 1 ) {
      
                if(arr2.indexOf(arr1[i]) > -1){
                     arr3.push(arr1[i]);
                }
        }
      return arr3;
    }


  



