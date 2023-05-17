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

const authorizedMails = ["gino@gmail.com", "ginetto@gmail.com", "gina@virgilio.it", "ginetta@outlook.it"];

const button = document.querySelector("button.submit");

button.addEventListener("click", function(){
    let emailCheck = document.getElementById("user-mail").value;
    let isMailCorrect = false;

    for(let i = 0; i < authorizedMails.length; i++){
        let mailList = authorizedMails[i];

        if(emailCheck == mailList){
            isMailCorrect = true;
        }
    }

    if(isMailCorrect){
        document.getElementById("output-mail").innerHTML = "Email corretta. Accesso completato.";
    }else{
        document.getElementById("output-mail").innerHTML = "Email errata. Inserisci una email valida.";
    }
});
