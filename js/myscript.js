let playerNumber = Math.floor(Math.random() * 6) + 1;
let comNumber = Math.floor(Math.random() * 6) + 1;

if(playerNumber > comNumber){
    console.log("Ha vinto il giocatore!");
    console.log(playerNumber + " Giocatore", comNumber + " Computer");
}else if(playerNumber == comNumber){
    console.log("Pareggio!");
    console.log(playerNumber + " Giocatore", comNumber + " Computer");
}
else{
    console.log("Ha vinto il computer!");
    console.log(playerNumber + " Giocatore", comNumber + " Computer");
}