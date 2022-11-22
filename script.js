// create round & turn counter
var counter = 1
var playerMove = 'naught-move'



// create event listener for game-grid
var gameGrid = document.querySelector('.game-grid')

gameGrid.addEventListener('click', function (event) {
    var targetBox = event.target
    // condition that box was clicked
    if (targetBox.classList.contains('grid-box') === true) {
        // check if grid is taken
        if (freeSpace(targetBox) === false) {
            // check who's turn
            if (counter % 2 === 0) {
                targetBox.classList.toggle('cross-move')
                var moveSpace = targetBox.classList[1]
                locationKey[moveSpace] = 'x'

                counter += 1
                checkWin()
                playerMove = 'naught-move'

            } else {
                targetBox.classList.toggle('naught-move')
                var moveSpace = targetBox.classList[1]
                locationKey[moveSpace] = 'o'
                
                counter += 1
                checkWin()
                playerMove = 'cross-move'

            }
        }
    }
    // check if win condition met
    // checkWin()
})

// create function for is move taken
function freeSpace(target) {
    if (target.classList.contains('cross-move') === true || target.classList.contains('naught-move') === true) {
        return true
    } else {
        return false
    }
}

// function to check if win
var gridBoxes = document.querySelectorAll('.grid-box')

//check horizontal win
function horizontalWin() {
    for (var i = 0; i < 9; i = i + 3) {
        var winCounter = 0
        // console.log(i)
        for (var gridIndex = i; gridIndex < 9; gridIndex++) {
            if (gridIndex < (i + 3)) {
                // console.log(true)
                if (gridBoxes[gridIndex].classList.contains(playerMove)) {
                    winCounter = winCounter + 1
                }
                // console.log(winCounter)
                // console.log(gridBoxes[gridIndex])
            }
            if (winCounter === 3) {
                console.log(`${playerMove} wins!`)
            }
        }
    }
}

// check vertical win
function verticalWin() {
    for (var i = 0; i < 3; i++) {
        var winCounter = 0
        for (var gridIndex = i; gridIndex < 9; gridIndex = gridIndex + 3) {
            if (gridBoxes[gridIndex].classList.contains(playerMove)) {
                winCounter = winCounter + 1
            }
            if (winCounter === 3) {
                console.log(`${playerMove} wins!`)
            }
        }
    }
}

// check diagonal win
function diagonalWin() {
    // for (var i = 0; i < 3; i = i + 2) {
    //     for (var gridIndex = i; gridIndex < 10; gridIndex + 4) {
    //         if (gridBoxes[gridIndex].classList.contains(playerMove)) {
    //             winCounter = winCounter + 1
    //         }
    //         if (winCounter = 3) {
    //             `${playerMove} wins!`
    //         }
    //     }
    // }
}

function checkWin() {
    horizontalWin()
    verticalWin()
    // diagonalWin()
}



// var locationKey = {
//     r1c1: document.querySelector('.r1c1'),
//     r1c2: document.querySelector('.r1c2'),
//     r1c3: document.querySelector('.r1c3'),
//     r2c1: document.querySelector('.r2c1'),
//     r2c2: document.querySelector('.r2c2'),
//     r2c3: document.querySelector('.r2c3'),
//     r3c1: document.querySelector('.r3c1'),
//     r3c2: document.querySelector('.r3c2'),
//     r3c3: document.querySelector('.r3c3'),
// }

var locationKey = {
    r1c1: '-',
    r1c2: '-',
    r1c3: '-',
    r2c1: '-',
    r2c2: '-',
    r2c3: '-',
    r3c1: '-',
    r3c2: '-',
    r3c3: '-',
}

// var locationKey = {
//     r1c1: [document.querySelector('.r1c1'), null],
//     r1c2: [document.querySelector('.r1c2'), null],
//     r1c3: [document.querySelector('.r1c3'), null],
//     r2c1: [document.querySelector('.r2c1'), null],
//     r2c2: [document.querySelector('.r2c2'), null],
//     r2c3: [document.querySelector('.r2c3'), null],
//     r3c1: [document.querySelector('.r3c1'), null],
//     r3c2: [document.querySelector('.r3c2'), null],
//     r3c3: [document.querySelector('.r3c3'), null],
// }

// function checkWin() {
//     if (counter % 2 === 0) {
//         var winner = 'Player One'
//     } else {
//         var winner = 'Player Two'
//     }

//     if ((locationKey.r1c1 === locationKey.r1c2) && (locationKey.r1c1 === locationKey.r1c3)) {
//         document.querySelector('.game-result').textContent = `${winner} wins!`
//     }  else if ((locationKey.r2c1 === locationKey.r2c2) && (locationKey.r2c1 === locationKey.r2c3)) {
//         document.querySelector('.game-result').textContent = `${winner} wins!`
//     }  else if ((locationKey.r3c1 === locationKey.r3c2) && (locationKey.r3c1 === locationKey.r3c3)) {
//         document.querySelector('.game-result').textContent = `${winner} wins!`
//     }  else if ((locationKey.r1c1 === locationKey.r2c1) && (locationKey.r1c1 === locationKey.r3c1)) {
//         document.querySelector('.game-result').textContent = `${winner} wins!`
//     }  else if ((locationKey.r1c2 === locationKey.r2c2) && (locationKey.r1c2 === locationKey.r3c2)) {
//         document.querySelector('.game-result').textContent = `${winner} wins!`
//     }  else if ((locationKey.r1c3 === locationKey.r2c3) && (locationKey.r1c3 === locationKey.r3c3)) {
//         document.querySelector('.game-result').textContent = `${winner} wins!`
//     }  else if ((locationKey.r1c1 === locationKey.r2c2) && (locationKey.r1c1 === locationKey.r3c3)) {
//         document.querySelector('.game-result').textContent = `${winner} wins!`
//     }  else if ((locationKey.r1c3 === locationKey.r2c2) && (locationKey.r1c3 === locationKey.r3c1)) {
//         document.querySelector('.game-result').textContent = `${winner} wins!`
//     }
// }