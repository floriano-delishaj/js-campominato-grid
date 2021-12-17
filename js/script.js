function createBox (output, x) {
    const newBox = document.createElement("div");
    newBox.className = 'box';
    newBox.innerHTML = x;
    output.append(newBox);
    newBox.addEventListener('click', function () {
        this.classList.toggle('light-blue');  //toggle aggiunge o rimuove classi (come un bottone)
    })                                       //invece add aggiunge e basta
}

function createGrid (max) {
    for (let i = 1; i <= max; i++) {

        createBox(containerOutput, i);
    }
}

const container = document.querySelector('.container');
const containerOutput = document.querySelector('.container-grid');
const selectionOne = document.getElementById('selection-1');
const selectionTwo = document.getElementById('selection-2');
const selectionThree = document.getElementById('selection-3');

alert('Premi un pulsante per iniziare a giocare');

selectionOne.addEventListener('click', function () {
    createGrid(100);
    container.classList.remove('small', 'medium');
    container.classList.add('big');
})
selectionTwo.addEventListener('click', function () {
    createGrid(81);
    container.classList.remove('big', 'small');
    container.classList.add('medium');
})

selectionThree.addEventListener('click', function () {
    createGrid(49);
    container.classList.remove('big', 'medium');
    container.classList.add('small');
})
