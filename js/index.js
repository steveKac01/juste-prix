//-------------------------------- Can be edited
let messageResult = [
"Bien joué !",
"est trop haut !",
"est trop bas !"
]
const nbrMax=100;

//-----------------------------------------------
const nbrToGuess = GetRandomInt(nbrMax);
let iTry = 0;//number of try
console.log(`Le nombre à deviner : ${nbrToGuess} `);//:O

//Grab elements
const inputUser = document.querySelector("input")
const dangerZone = document.querySelector(".text-danger")
const btn = document.querySelector("button")
const result = document.querySelector("#result")
const divShake = document.querySelector(".p-5")
//Events
inputUser.addEventListener("change",checkInput)
btn.addEventListener("click",CompareNumbers);

function GetRandomInt(max) {
return Math.round(Math.random()*max);
}

function checkInput()
{
    if(isNaN(inputUser.value))
    {
        dangerZone.textContent = " Vous devez rentrer un nombre !"
        btn.disabled = true;  //prevent the player to click if it's not a number
    } 
}

function CompareNumbers()
{
    iTry++;
    if(inputUser.value==nbrToGuess)
    {
        //WIN
        CreateResultDiv(`${messageResult[0]} Vous avez obtenu le bon numéro en ${iTry} essai(s).`,true,"win")
    }else if(inputUser.value>nbrToGuess)
    {
        //TOO HIGH
        CreateResultDiv(messageResult[1],false,"plus")
    }else{
        //TOO LOW     
        CreateResultDiv(messageResult[2],false,"moins")
    }    
}

function CreateResultDiv(message,won,classAdd)
{
    let madiv = document.createElement("div");
    madiv.classList.add("col-lg-8", "alert");
    madiv.style=""
    madiv.textContent = "#"+iTry+" ";
    if(won){
        madiv.classList.add("fini");
        madiv.textContent+=message;
        btn.disabled = true;
        inputUser.disabled = true; //End of the game
        
    }else{  
        madiv.classList.add(classAdd);       
        divShake.style="animation: shake linear 0.5s;"       
        madiv.textContent+="Le nombre "+ inputUser.value+" "+message;
    }
     result.prepend(madiv);
}