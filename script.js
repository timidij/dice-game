const dice = document.querySelector(".dice")






// dice roll

const diceRole = ()=>{
    let number = Math.trunc(Math.random()*6)+1
    // console.log(number)
    if(number === 6){
dice.src = "./image/dice-6.png"
return number;
    }

    else if (number === 5){
        dice.src = "./image/dice-5.png"
        return number;
         }
    else if(number === 4){
            dice.src = "./image/dice-4.png"
            return number;
                }
    else if(number === 3){
                    dice.src = "./image/dice-3.png"
                    return number;
                        }

     else if(number === 2){
         dice.src = "./image/dice-2.png"
         return number;
             }

    else if(number === 1){
                dice.src = "./image/dice-1.png"
                return number;
                    }
    

}



//current scores
let current0 = document.querySelector("#current--0")
let current1 = document.querySelector("#current--1")





const roll = document.querySelector(".btn--roll")

 let player1Current=0;
 let player2Current=0;

 let count;
 
roll.addEventListener("click", function(){
    

    count = diceRole()
   
    if (cool == 0){
        
        if(count == 1){
            current0.innerHTML= 0
            player1Current=0
            changeOver()
        }else{
            player1Current += count
        current0.innerHTML= player1Current

        }
    }else{
        if(count == 1){
            current1.innerHTML=0;
            player2Current=0
            changeOver();
        }
        else{
            player2Current += count
        current1.innerHTML= player2Current

        }
    }

    

})


//to change players
let player0 = document.querySelector(".player--0")
let player1 = document.querySelector(".player--1")
let cool = 0;

let score0 = document.querySelector("#score--0")
let score1 = document.querySelector("#score--1")
const changeOver = () =>{

let value0 = Number(score0.innerHTML)
let value1 = Number(score1.innerHTML)


    if (cool === 0){
    player1.classList.add("player--active")
    player0.classList.remove("player--active")
   var win1= value0 + player1Current
    score0.innerHTML= win1
    
    if (win1 >= 100){
        console.log("player 1 wins")
        player0.classList.add("player--winner")
    }
    cool=1
    player1Current=0
    player2Current =0
    count=0
    currentReset()
    }
    else if (cool ===1){

        player0.classList.add("player--active")
        player1.classList.remove("player--active")
        score1.innerHTML= value1 + player2Current
        var win2 = value1 + player2Current

        //declaring player 2 as winner
        if(win2 >= 100){
            console.log("player 2 wins")
            player1.classList.add("player--winner")
        }
        player1Current=0
        player2Current =0
        count=0
    cool=0
    currentReset()

    }
    

}

let hold = document.querySelector(".btn--hold")
hold.addEventListener("click", changeOver)


const currentReset =()=>{
    current0.innerHTML= 0
    current1.innerHTML= 0
   
}

const reset = document.querySelector(".btn--new")
const restart = ()=>{
score0.innerHTML=0
score1.innerHTML=0
player0.classList.remove("player--winner")
player1.classList.remove("player--winner")
cool = 1
currentReset()
changeOver()

}

reset.addEventListener("click", restart)
