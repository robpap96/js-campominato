// Consegna

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora
// di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti
// (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
"use strict";

//creo array bombe
const bombe = [];
function crea16Bombe(str, range){
    for(let i=0; i<16; i++) {
        let num = parseInt(Math.random()*range + 1);
        if(str.includes(num)){
           num = Math.round(Math.random()*range + 1); 
           i--;
           continue;
        }
        str.push(num);
    }
    //per deb
    console.log( "Numeri generati: " + str +", ");
}

const boardContainer = document.querySelector(".board");
const playButton = document.getElementById("btn-play");
let clicked = false;

playButton.addEventListener("click", function(){

    let levelSelected = document.getElementById("level-selected").value;
    //FACILE
    if(clicked === false && levelSelected === "facile") {

        let punteggio = 0;
        boardContainer.classList.remove("display__none");
        let cellClick = false;
        crea16Bombe(bombe, 100);
        for(let i=1; i<=100; i++){
            //creo elemento
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i;
            boardCell.classList.add("board__number");
            //aggiungo evento click
            boardCell.addEventListener("click", function() {
                let num = parseInt(this.innerHTML);
                if(bombe.includes(num) && cellClick === false){
                    this.classList.add("red__cell");
                    cellClick = true;
                    //prova stampa messaggio
                    const message = document.querySelector(".w-or-l");
                    message.innerHTML = '<h1 class="text-align-center"> HAI PERSO !!! </h1>';
                } else if(cellClick === false){
                    this.classList.add("blue__cell");
                    //deb
                }
                
            }); 
            //punteggio++;
            //console.log(`il tuo punteggio è di -> ${punteggio}`); 
            //concateno l'elemento
            boardContainer.append(boardCell);
        }
        clicked = true; 
        
    } 
        //MEDIO
        else if(clicked === false && levelSelected === "medio") {
        boardContainer.classList.remove("display__none");
        for(let i=1; i<=81; i++){
            //creo elemento
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i;
            boardCell.classList.add("board__number");
            //CREO LE BOMBE
            crea16Bombe(bombe, 81);
            //aggiungo evento click
            boardCell.addEventListener("click", function() {
                console.log(this.innerHTML);
                this.classList.add("blue__cell");
            });  
            //concateno l'elemento
            boardContainer.append(boardCell);
        }
        clicked = true;

    } 
        //DIFFICILE
        else if (clicked === false && levelSelected === "difficile") {
        boardContainer.classList.remove("display__none");
        for(let i=1; i<=49; i++){
            //creo elemento
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i;
            boardCell.classList.add("board__number");
            //CREO LE BOMBE
            crea16Bombe(bombe, 49);
            //aggiungo evento click
            boardCell.addEventListener("click", function() {
                console.log(this.innerHTML);
                this.classList.add("blue__cell");
            });  
            //concateno l'elemento
            boardContainer.append(boardCell);
        }
        clicked = true;

    } else {
        alert("Hai gia creato la board!!");
    }   
});

