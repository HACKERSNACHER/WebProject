let boxes=document.querySelectorAll(".box");
let resetGameButton=document.querySelector(".reset");
let messageContainer=document.querySelector(".messageContainer");
let newGameButton=document.querySelector("#new_btn");
let message=document.querySelector("#message");

let turnO= true;
const winPattern=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6] ];

    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            console.log("box is clicked");
            if(turnO){
                box.innerText= "O";
                turnO=false;
            }
            else{
                box.innerText= "X";
                turnO=true;
            }
            box.disabled =true;
            // after checking and clicking we every time check the person is win or not then checkwinner function check after clicking every time and itterate on every winpattern
            checkWinner();
        });
    });

    const resetGame=()=>{
        turnO=true;
        enableButton();
        messageContainer.classList.add("hide");
       }
    const disableButton=()=>{
         for(let box of boxes){
            box.disabled=true;
         }
    };
    const enableButton=()=>{
         for(let box of boxes){
            box.disabled=false;
            box.innerText="";
         }
    };
   

    const showWinner =(winner)=>{
        message.innerText=`Conguratulation, winner is ${winner}`;
        messageContainer.classList.remove("hide");
        disableButton()
    };

    const checkWinner=()=>{
        for(let pattern of winPattern){

           let pos1Val=boxes[pattern[0]].innerText;
           let pos2Val=boxes[pattern[1]].innerText;
           let pos3Val=boxes[pattern[2]].innerText;

           if(pos1Val !="" && pos2Val !="" && pos3Val !=""){ 
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner is ",pos1Val);
                showWinner(pos1Val);
            }
           }
        }
    };

    resetGameButton.addEventListener("click",resetGame);
    newGameButton.addEventListener("click",resetGame);

