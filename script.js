const word = "test";
const input = [];

document.addEventListener("keydown", (e) => {
    input.push(e.key);
    updateInputDisplay();
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

