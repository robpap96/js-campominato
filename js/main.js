
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
            boardCell.classList.add("board__number__facile");
            //aggiungo evento click
            boardCell.addEventListener("click", function() {
                let num = parseInt(this.innerHTML);
                if(bombe.includes(num) && cellClick === false){

                    this.classList.add("red__cell");
                    //prova bonus
                    // for(let i=0; i<=100; i++){
                    //     if(bombe.includes(bombe[i])){

                    //     }
                    // }
                    cellClick = true;
                    //prova stampa messaggio
                    const message = document.querySelector(".w-or-l");
                    message.innerHTML = `<h1 class="text-align-center"> HAI PERSO !!! <br> il tuo punteggio è di -> ${punteggio}</h1>`;
                } else if(cellClick === false && punteggio <= 84 ) {
                    this.classList.add("blue__cell");
                    punteggio++;
                } else {
                    message.innerHTML = `<h1 class="text-align-center"> HAI VINTO !!! `;
                }
                
            }); 
            //concateno l'elemento
            boardContainer.append(boardCell);
        }
        clicked = true; 
        
    } 
        //MEDIO
        else if(clicked === false && levelSelected === "medio") {
            let punteggio = 0;
            boardContainer.classList.remove("display__none");
            let cellClick = false;
            crea16Bombe(bombe, 81);
            for(let i=1; i<=81; i++){
                //creo elemento
                const boardCell = document.createElement("div");
                boardCell.innerHTML = i;
                boardCell.classList.add("board__number__medio");
                //aggiungo evento click
                boardCell.addEventListener("click", function() {
                    let num = parseInt(this.innerHTML);
                    if(bombe.includes(num) && cellClick === false){
    
                        this.classList.add("red__cell");
                        //prova bonus
                        // for(let i=0; i<=81; i++){
                        //     if(bombe.includes(bombe[i])){
    
                        //     }
                        // }
                        cellClick = true;
                        //prova stampa messaggio
                        const message = document.querySelector(".w-or-l");
                        message.innerHTML = `<h1 class="text-align-center"> HAI PERSO !!! <br> il tuo punteggio è di -> ${punteggio}</h1>`;
                    } else if(cellClick === false && punteggio <= 65 ) {
                        this.classList.add("blue__cell");
                        punteggio++;
                    } else {
                        message.innerHTML = `<h1 class="text-align-center"> HAI VINTO !!! `;
                    }
                    
                });  
                //concateno l'elemento
                boardContainer.append(boardCell);
        }
        clicked = true;

    } 
        //DIFFICILE
        else if (clicked === false && levelSelected === "difficile") {
            let punteggio = 0;
            boardContainer.classList.remove("display__none");
            let cellClick = false;
            crea16Bombe(bombe, 81);
            for(let i=1; i<=49; i++){
                //creo elemento
                const boardCell = document.createElement("div");
                boardCell.innerHTML = i;
                boardCell.classList.add("board__number__difficile");
                //aggiungo evento click
                boardCell.addEventListener("click", function() {
                    let num = parseInt(this.innerHTML);
                    if(bombe.includes(num) && cellClick === false){
    
                        this.classList.add("red__cell");
                        //prova bonus
                        // for(let i=0; i<=49; i++){
                        //     if(bombe.includes(bombe[i])){
    
                        //     }
                        // }
                        cellClick = true;
                        //prova stampa messaggio
                        const message = document.querySelector(".w-or-l");
                        message.innerHTML = `<h1 class="text-align-center"> HAI PERSO !!! <br> il tuo punteggio è di -> ${punteggio}</h1>`;
                    } else if(cellClick === false && punteggio <= 33 ) {
                        this.classList.add("blue__cell");
                        punteggio++;
                    } else {
                        message.innerHTML = `<h1 class="text-align-center"> HAI VINTO !!! `;
                    }
                    
                });  
                //concateno l'elemento
                boardContainer.append(boardCell);
        }
        clicked = true;

    } else {
        alert("Hai gia creato la board!! Ricarica la pagine per riprovare");
    }   
});

