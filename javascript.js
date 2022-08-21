function createSquares() {
    const gameBoard = document.getElementById('board')
    for (let i = 0; i < 30; i++) {
        let square = document.createElement('div')
        square.classList.add("square")
        square.setAttribute('id', i + 1);
        gameBoard.appendChild(square);
    }
};
createSquares();

function submitWord() {

}

function delLetter() {

}


const keys = document.querySelectorAll('.keyboard-row button')

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e) => {
        const key = e.target.getAttribute('data-key')
        console.log(key)

        if (key === 'enter') {
            submitWord();
            return;
        }
        if (key === 'delete') {
            delLetter();
            return;
        }
    })
}; 

