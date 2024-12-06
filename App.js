let box = document.querySelectorAll(".box");
let res = document.querySelector("#Reset");
let newb = document.querySelector("#new");
let msgC = document.querySelector(".massage-container");
let para = document.querySelector("#msg");

let turnO = true;
const winP = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

box.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        Winnercheck();
    });
});
const enable = () => {
    for (let b of box) {
        b.disabled = false;
    }
};

const boxdis = () => {
    for (let b of box) {
        b.disabled = true;
    }
};

const showWiner = (winner) => {
    para.innerText = `Congrats ${winner}, you are the winner!`;
    msgC.classList.remove("hide");
    boxdis();
};

const Winnercheck = () => {
    for (let pattern of winP) {
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos1 === pos3) {
                console.log("winner");
                showWiner(pos1);
                return; // Exit early after finding a winner
            }
        }
    }
};

const restGame = () => {
    turnO = true;
    enable();

    box.forEach((b) => {
        b.innerText = "";
        b.disabled = false;
    });
    para.innerText = "";
    msgC.classList.add("hide");
};

res.addEventListener("click", restGame);
newb.addEventListener("click",restGame);