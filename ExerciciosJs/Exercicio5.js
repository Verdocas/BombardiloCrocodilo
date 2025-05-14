let input= parseInt(prompt("Choose a number before rolling the dice (1-6)"))

let dice= Math.floor((Math.random()*6)+1)


while (input!==dice) {
    input= parseInt(prompt("Choose a number before rolling the dice (1-6)"))
    dice= Math.floor((Math.random()*6)+1)
}

if(input==dice) {
    alert("user wins")
} 

//parseInt(Number,input)