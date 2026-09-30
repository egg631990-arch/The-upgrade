const Start = document.getElementById("Start")
const Fortuna = document.getElementById("Fortuna")

const grad = [180, 190, 200, 210, 220, 230, 240, 170, 160, 150, 140, 130, 120]

let bet = 0;
let totalbet = 0;

function StartClick() {
    bet = Math.floor(Math.random() * 360)
    
    totalbet += 360 + bet;
    
    setTimeout(() => {
        Fortuna.style.transform = `rotate(${totalbet}deg)`;
    }, 1000)
    
    console.log(bet)  
    
}