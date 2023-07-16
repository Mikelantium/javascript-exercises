const tableBoardBody$$ = document.querySelector('[data-function="board"]');
const attempts$$ = document.querySelector('[data-function="attempts"]');
const imgXUrl = './public/exercise-4/x.png';
const imgChestUrl = './public/exercise-4/chest.png';
const imgSkullUrl = './public/exercise-4/skull.png';
let winnerCoor = { x: 0, y: 0 };

let gameIsOver = false;

function drawBoard() {
    gameIsOver = false;
    const rows = prompt('Introduce número de filas');
    const cols = prompt('Introduce número de columnas');

    setRandomBoatCoor(rows, cols);

    for (let i = 0; i < rows; i++) {
        const tr$$ = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td$$ = document.createElement('td');

            const img$$ = document.createElement('img');
            img$$.setAttribute('src', imgXUrl);

            td$$.addEventListener('click', function () {
                checkShot(img$$, i, j)
            });
            td$$.appendChild(img$$)
            tr$$.appendChild(td$$);
        }
        tableBoardBody$$.appendChild(tr$$);
    }

}

function checkShot(img$$, i, j) {
    if (!gameIsOver) {
        attempts$$.textContent = Number(attempts$$.textContent) + 1;

        if (winnerCoor.x === i && winnerCoor.y === j) {
            img$$.setAttribute('src', imgChestUrl);
            setTimeout(() => {
                alert("Enhorabuena. Has ganados");
                // tableBoardBody$$.innerHTML = "";
                gameIsOver = true;
                // drawBoard()
            }, 200)
        } else {
            img$$.setAttribute('src', imgSkullUrl);
        }
    }
}

function setRandomBoatCoor(maxRows, maxCols) {
    winnerCoor.x = Math.floor(Math.random() * maxRows);
    winnerCoor.y = Math.floor(Math.random() * maxCols);
}

drawBoard();
