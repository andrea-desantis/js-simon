// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono 
// invece 5 input in cui l'utente deve inserire i 
// numeri che ha visto precedentemente, nell'ordine 
// che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il 
// software dice quanti e quali dei numeri da 
// indovinare sono stati individuati.

// NOTA: non è importante l'ordine con cui l'utente 
// inserisce i numeri, basta che ne indovini il più possibile.


// click
/*
generare 5 numeri random, no ripetizione
stampare i numeri
parte il timer e stamparlo
a timer scaduto, nascondere i numeri e mostrare gli input


click del bottone controlla

raccogliere numeri utente
controllare quali sono i numeri corretti
stampare il risultato
 
 */


// elementi

const iniziaBtn = document.getElementById("inizia");
const numeriElem = document.getElementById("numeri");
const timerElem = document.getElementById("timer");
const inputs = document.querySelectorAll("input");
const form = document.getElementById("numbers-form");
const risultatoElem = document.getElementById("risultato");


let numeri = [];
const numeriUtente = [];
const min = 10; // minimo e massimo dei numeri che possono uscire
const max = 50;
const totNum = 5;
const time= 5000;
let timerId;


// funzioni
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function generaNumeriUnici(min, max, quantita){
    const result = [];
    for(let i=0; i<quantita; i++){
        const random = getRndInteger(min, max);
        if(!result.includes(random)){
            result.push(random);
        } else {
            i--;
        }   
    }
    return result;
}

// gioco

iniziaBtn.addEventListener("click", function(){

    form.reset();
    form.classList.add("none");
    risultatoElem.classList.add("none")

    numeri = generaNumeriUnici( min, max, totNum);
    numeriElem.innerHTML = numeri;
    numeriElem.classList.remove("none")
    setTimeout(function(){
        numeriElem.classList.add("none")
        form.classList.remove("none")
    }, time);
});


form.addEventListener ("submit", function (event){
    event.preventDefault();
    numeriUtente =[];
    for (let i=0; i<inputs.length; i++){
        const curNumbers = parseInt(inputs[i].value);
        if (!userNumbers.includes(curNumber)) {
            numeriUtente.push(curNumber);
        }  
    }


    const numeriCorretti = [];
    for(let i=0; i<numeriUtente.length; i++){
        const curNumbers = numeriUtente[i];
        if(numeri.includes(curNumbers)){
            numeriCorretti.push(curNumber);
        }
    }

    risultatoElem.innerHTML = `Hai infovinato ${numeriCorretti.length} numeri: ${numeriCorretti}`;
    risultatoElem.classList.remove("none");
});