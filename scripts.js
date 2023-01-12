const gridContainer = document.getElementById('grid-container');

const playButton = document.getElementById('start');

const bombe = generaBombe(1, 100, 16);

playButton.addEventListener('click',

    function () {

        console.log('Cliccato play');
        
        gridContainer.innerHTML = '';

        for (let i = 1; i <= 100; i++) {
        
            const newCell = createNewCell(i);
            gridContainer.append(newCell);
        
        }

    }

);

function createNewCell(num) {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click',
    
        function () {

            console.log(num);
            this.classList.add('clicked');
            
            if (bombe.includes(num)) {
                cell.classList.add('bomb')
                console.log('funziona')
            }
        }
    
    );

    
    cell.innerHTML = num;

    return cell;

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generaBombe(min, max, numBombe) {
    const bombe = [];
    
    for (let i = 1; i <= numBombe; i++) {
     
        let randomNumber = getRandomNumber(min, max); 

        while(bombe.includes(randomNumber)){
            randomNumber = getRandomNumber(1, 100);
        }

        bombe.push(randomNumber);
    }

    console.log(bombe)

    return bombe

}





