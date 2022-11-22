// create round & turn counter
var counter = 1


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
                counter += 1
            } else {
                targetBox.classList.toggle('naught-move')
                counter += 1
            }
        }
    }
    // check if win condition met
    checkWin()
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
function checkWin() {

}