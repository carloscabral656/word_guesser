const word = "test";
const input = [];

document.addEventListener("keydown", (e) => {
    let reg = new RegExp('^[a-zA-Z]+$');
    if(reg.test(e.key)){
        input.push(e.key.toUpperCase());
        updateInputDisplay();
    }
});

function updateInputDisplay(){
    const inputDisplay = [...document.getElementsByClassName('letter')];
    let index = 0;
    inputDisplay.forEach(e => {
        if(input[index] !== undefined){
            e.innerText = input[index++];
        }
    });
}

