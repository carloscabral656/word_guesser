const word = "test";
const input = [];
const btnTry = document.getElementById("button_try");
btnTry.addEventListener("keydown", handleBtnTry); // Handle keydown
createLetterHtml();

const clickEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    view: window
});

document.addEventListener("keydown", (e) => {
    if(e.key.length > 1) return;
    let reg = new RegExp('^[a-zA-Z]+$');
    if(reg.test(e.key)){
        input.push(e.key.toUpperCase());
        updateInputDisplay();
    }
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        btnTry.dispatchEvent(clickEvent); 
        verifyAnswer();
    }
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Backspace"){
        input.pop();
        updateInputDisplay();
    }
});


function updateInputDisplay(){
    const inputDisplay = [...document.getElementsByClassName('letter')];
    let index = 0;
    inputDisplay.forEach(e => {
        console.log(input)
        if(input[index] !== undefined){
            e.innerText = input[index++];
        } else {
            e.innerText = "";
        }
    });
}

function handleBtnTry(){
    alert("Enter");
    btnTry.dispatchEvent(clickEvent);
}

function createLetterHtml(){
    const wordHtml = document.getElementById("word");
    let letterHtmlAux;
    for(let i = 0 ; i < word.length ; i++){
        letterHtmlAux = document.createElement('div');
        letterHtmlAux.classList.toggle('letter');
        wordHtml.append(letterHtmlAux);
    }
}

function verifyAnswer(){

}

