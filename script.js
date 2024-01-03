const word = "TESTE".toUpperCase(); // Always tranform the string
let input = [];
const btnTry = document.getElementById("button_try");
btnTry.addEventListener("keydown", handleBtnTry); // Handle keydown
createLetterHtml();

const lettersHtml = [...document.getElementsByClassName("letter")];

const clickEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    view: window
});

document.addEventListener("keydown", (e) => {
    if(e.key.length > 1) return;
    let reg = new RegExp('^[a-zA-Z]+$');
    if(reg.test(e.key) && input.length < word.length){
        input.push(e.key.toUpperCase());
        updateInputDisplay();
    }
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        btnTry.dispatchEvent(clickEvent); 
        if(input.length === word.length){
            emendAnswer();
            let correct = isAnswerCorrect();
            if(!correct){
                input = [];
                updateInputDisplay();
            }
        }
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
        if(input[index] !== undefined){
            e.innerText = input[index++];
        } else {
            e.innerText = "";
        }
    });
}

function handleBtnTry(){
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

function isAnswerCorrect(){
    let aux = 0;
    for(let i = 0; i < input.length ; i++) if(input[i] === word[i]) aux++;
    if(aux === input.length) return true;
    return false;
}

function emendAnswer(){
    let index = 0;
    lettersHtml.forEach(letterHtml => {
        letterHtml.classList.remove("correct_letter");
        letterHtml.classList.remove("wrong_letter");
        if(letterHtml.innerText === word[index]){
            letterHtml.classList.toggle("correct_letter");
        }else{
            letterHtml.classList.toggle("wrong_letter");
        }
        index++;
    });
}

function resetLetters(){
    lettersHtml.forEach(letterHtml => {
        letterHtml.classList.remove("correct_letter");
        letterHtml.classList.remove("wrong_letter");
    });
}

