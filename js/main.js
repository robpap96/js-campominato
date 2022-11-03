"use strict";

const boardContainer = document.querySelector(".board");
const playButton = document.getElementById("btn-play");

let clicked = false;

playButton.addEventListener("click", function(){
    let levelSelected = document.getElementById("level-selected").value;
    if(clicked === false && levelSelected === "facile") {

        boardContainer.classList.remove("display__none");
        for(let i=1; i<=100; i++){
            //creo elemento
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i;
            boardCell.classList.add("board__number");
            //aggiungo evento click
            boardCell.addEventListener("click", function() {
                console.log(this.innerHTML);
                this.classList.add("blue__cell");
            });  
            //concateno l'elemento
            boardContainer.append(boardCell);
        }
        clicked = true; 
    } else if(clicked === false && levelSelected === "medio") {
        boardContainer.classList.remove("display__none");
        for(let i=1; i<=81; i++){
            //creo elemento
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i;
            boardCell.classList.add("board__number");
            //aggiungo evento click
            boardCell.addEventListener("click", function() {
                console.log(this.innerHTML);
                this.classList.add("blue__cell");
            });  
            //concateno l'elemento
            boardContainer.append(boardCell);
        }
        clicked = true;
    } else if (clicked === false && levelSelected === "difficile") {
        boardContainer.classList.remove("display__none");
        for(let i=1; i<=49; i++){
            //creo elemento
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i;
            boardCell.classList.add("board__number");
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

