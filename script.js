pics = ["./images/pic1.png", "./images/pic2.png", "./images/pic3.png", "./images/pic4.png", "./images/pic5.png", "./images/pic6.png", "./images/pic7.png", "./images/pic8.png", "./images/pic1.png", "./images/pic2.png", "./images/pic3.png", "./images/pic4.png", "./images/pic5.png", "./images/pic6.png", "./images/pic7.png", "./images/pic8.png"];
flipedPics = [];
counter = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function play(cellule){
    let cell = document.getElementById(cellule);
    cell.setAttribute("class", "face");
    flipedPics.push(cellule);
    if((flipedPics.length >= 2)){
        let first = document.getElementById(flipedPics[0]);
        let second = document.getElementById(flipedPics[1]);
        if(first.getAttribute("src")==second.getAttribute("src")){
            counter++;
            if(counter==8){
                let msg = document.getElementById("gameover");
                msg.style.display = "flex";
            }
        }
        else{
            setTimeout(() => {  
                first.setAttribute("class", "back");
                second.setAttribute("class", "back"); 
            }, 700);
        }

        flipedPics = [];
    }
}

function start(){
    shuffleArray(pics);
    let msg = document.getElementById("gameover");
    msg.style.display = "none"
    for (let i = 0; i < pics.length; i++) { 
        let cell = document.getElementById("cellule"+String(i+1));
        cell.setAttribute("src", pics[i]);
        cell.removeAttribute("class");
    }
    setTimeout(() => {
        for (let i = 0; i < pics.length; i++) { 
            let cell = document.getElementById("cellule"+String(i+1));
            cell.setAttribute("class", "back");
        }
    }, 1200);
}

start();