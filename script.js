let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".boton");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpattern = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 8],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    console.log(box);
    box.addEventListener("click", () => {
    box.innerText = ("hello");
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinnr();
    });
    
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.enabled = false;
        box.innerText = "";
    }
}
const showWinner = (Winner) =>{
  msg.innerText = `Congratulation, Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinnr = () => {
    for (let pattern of winpattern){
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }

    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame );



