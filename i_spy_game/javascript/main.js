let burger = document.getElementById("burger-pic");
let rainbow  = document.getElementById("rainbow-pic");
let clock  = document.getElementById("clock-pic");
let pumpkin  = document.getElementById("pumpkin-pic");
let parrot  = document.getElementById("parrot-pic");

burger.addEventListener("click", crossitem, false);
rainbow.addEventListener("click", crossitem, false);
clock.addEventListener("click", crossitem, false);
pumpkin.addEventListener("click", crossitem, false);
parrot.addEventListener("click", crossitem, false);



let position = document.getElementById('button');
position.addEventListener("click", replay, false);

function crossitem (event) {
    let pId = event.target.attributes["data-p"].value;
    let para = document.getElementById(pId);
    para.className = "crossed-out";
    para.style.textDecoration="line-through coral solid 5px";
    event.preventDefault();
    checkItems();
}

 
function checkItems () {
    let crossedOut = document.querySelectorAll('p.crossed-out');
    let buttonExist = document.getElementById('button').innerHTML !== "";
    if (crossedOut.length === 5 && !buttonExist) {
        let newEl1 = document.createElement('h3');
        let text1 = document.createTextNode('Good Job!');
        let newEl2 = document.createElement('button');
        let text2 = document.createTextNode('Play Again');
        newEl1.appendChild(text1);
        newEl2.appendChild(text2);
        position.appendChild(newEl1);
        position.appendChild(newEl2);
    };
}



function replay(){
    location.reload();
}