// Dice game
let playerNumber = Math.floor(Math.random() * 6) + 1;
let comNumber = Math.floor(Math.random() * 6) + 1;
let winnerText;

if(playerNumber > comNumber){
    console.log("Ha vinto il giocatore!");
    console.log(playerNumber + " Giocatore", comNumber + " Computer");
    winnerText = "Ha vinto il giocatore!";
}else if(playerNumber == comNumber){
    console.log("Pareggio!");
    console.log(playerNumber + " Giocatore", comNumber + " Computer");
    winnerText = "Pareggio!";
}
else{
    console.log("Ha vinto il computer!");
    console.log(playerNumber + " Giocatore", comNumber + " Computer");
    winnerText = "Ha vinto il computer!";
}

document.getElementById("output-dice").innerHTML = winnerText; 

// Mail

