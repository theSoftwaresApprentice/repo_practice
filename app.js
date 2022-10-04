const letters = document.getElementsByClassName('letter')

const changeLetterColor = setInterval (function () {
    for (let letter of letters){
        letter.style.color = colorChange();
    }
}, 500)

function colorChange(){
    p = Math.random();
    if (p >= .5){return 'blue'}
    else {return 'pink'};
}