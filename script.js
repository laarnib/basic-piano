const buttons = document.querySelectorAll('button')

function playSound(key) {
    switch (key) {
        case 'a' :
            let noteDo = new Audio("sounds/316899__jaz-the-man-2__do-stretched.wav");
            noteDo.play();
            break;
        case 's' :
            let noteRe = new Audio("sounds/316909__jaz-the-man-2__re-stretched.wav");
            noteRe.play();
            break;
        case 'd' :
            let noteMi = new Audio("sounds/316907__jaz-the-man-2__mi-stretched.wav");
            noteMi.play();
            break;
        case 'f' :
            let noteFa = new Audio("sounds/316905__jaz-the-man-2__fa-stretched.wav");
            noteFa.play();
            break;
        case 'g' :
            let noteSol = new Audio("sounds/316911__jaz-the-man-2__sol-stretched.wav");
            noteSol.play();
            break;
        case 'h' :
            let noteLa = new Audio("sounds/316903__jaz-the-man-2__la-stretched.wav");
            noteLa.play();
            break;
        case 'j' :
            let noteTi = new Audio("sounds/316910__jaz-the-man-2__si-stretched.wav");
            noteTi.play();
            break;
        case 'k' :
            let noteDO = new Audio("sounds/316900__jaz-the-man-2__do-stretched-octave.wav");
            noteDO.play();
            break;
        default :
            console.log("Unknown");
    }
}

function animateKey(key) {
    let button = document.querySelector("#" + key);
    button.classList.add('keyPressed');
    setTimeout(() => {
        button.classList.remove('keyPressed');
    }, 500);
}

for (let button of buttons) {
    button.addEventListener('click', function (evt) {
        let key = button.getAttribute('id');
        playSound(key);
        animateKey(key);
    })
}

document.addEventListener('keydown', function(evt) {
    let key = evt.key;
    console.log(key);
    playSound(key);
    animateKey(key);
})