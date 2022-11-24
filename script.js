// global variables
var turnCounter = 1
var playerMove = 'naught-move'
var pOneName = 'Player One'
var pTwoName = 'Player Two'
var winCondition = false
var pOneScore = 0
var pTwoScore = 0
var roundTally = 1

// global DOM variables
var pOneScoreDisplay = document.querySelector('.p1-score')
var pTwoScoreDisplay = document.querySelector('.p2-score')
var gameGrid = document.querySelector('.game-grid')
var gridBoxes = document.querySelectorAll('.grid-box')
var turnDisplay = document.querySelector('.turn-display')
var resultMsg = document.querySelector('.game-result')
var resetBtn = document.querySelector('.reset-play')
var roundDisplay = document.querySelector('.round-tally')
var newGameBtn = document.querySelector('.new-game')


// create event listener for game-grid

gameGrid.addEventListener('click', function (event) {
    var targetBox = event.target
    if (turnCounter < 10) {
        if (winCondition !== true) {
            // condition that box was clicked
            if (targetBox.classList.contains('grid-box') === true) {
                // check if grid is taken
                if (freeSpace(targetBox) === false) {
                    // check who's turn
                    if (turnCounter % 2 === 0) {
                        targetBox.classList.toggle('cross-move')
                        var moveSpace = targetBox.classList[1]
                        turnDisplay.textContent = `${pOneName}'s Turn`
                        checkWin()
                        turnCounter += 1
                        if (turnCounter === 10) {
                            turnDisplay.textContent = `Game Over`
                            resultMsg.textContent = `Its a tie!`
                        } else {
                        playerMove = 'naught-move'
                        }
                    } else {
                        targetBox.classList.toggle('naught-move')
                        var moveSpace = targetBox.classList[1]
                        turnDisplay.textContent = `${pTwoName}'s Turn`
                        checkWin()
                        turnCounter += 1
                        if (turnCounter === 10 && winCondition !== true) {
                            turnDisplay.textContent = `Game Over`
                            resultMsg.textContent = `Its a tie!`
                        } else {
                            playerMove = 'cross-move'
                        }
                    }
                }
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

//check horizontal win
function horizontalWin() {
    for (var i = 0; i < 9; i = i + 3) {
        var winCounter = 0
        for (var gridIndex = i; gridIndex < 9; gridIndex++) {
            if (gridIndex < (i + 3)) {
                if (gridBoxes[gridIndex].classList.contains(playerMove)) {
                    winCounter = winCounter + 1
                }
            }
            if (winCounter === 3) {
                winCondition = true
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
                winCondition = true
            }
        }
    }
}

// check diagonal win
function diagonalWin() {
    var winCounter = 0
    for (var i = 0; i < 9; i = i + 4) {
        if (gridBoxes[i].classList.contains(playerMove)) {
            winCounter = winCounter + 1
        }
        if (winCounter === 3) {
            winCondition = true
        }
    }
    var winCounter = 0
    for (var i = 2; i < 7; i = i + 2) {
        if (gridBoxes[i].classList.contains(playerMove)) {
            winCounter = winCounter + 1
        }
        if (winCounter === 3) {
            winCondition = true
        }
    }
    
}

// check tie condition
// function checkTie() {

// }

function checkWin() {
    horizontalWin()
    verticalWin()
    diagonalWin()
    // checkTie()
    if (winCondition === true) {
        if (turnCounter % 2 === 0) {
            resultMsg.textContent = `${pTwoName} wins!`
            pTwoScore = pTwoScore + 1
            // console.log(pTwoScore)
            pTwoScoreDisplay.textContent = `Score: ${pTwoScore}` 
            // turnDisplay.textContent = `Game Over`
        } else {
            resultMsg.textContent = `${pOneName} wins!`
            pOneScore = pOneScore + 1
            // console.log(pOneScore)
            pOneScoreDisplay.textContent = `Score: ${pOneScore}`
            // turnDisplay.textContent = `Game Over`
        }
    }
}

// eventListener to reset game-grid
resetBtn.addEventListener('click', function (event) {
    for (var i = 0; i < 9; i++) {
        gridBoxes[i].classList.remove('cross-move')
        gridBoxes[i].classList.remove('naught-move')
    }
    if (turnCounter > 1) {
        turnCounter = 1
        playerMove = 'naught-move'
        winCondition = false
        resultMsg.textContent = `${pOneName}'s Turn`
        roundTally = roundTally + 1
        roundDisplay.textContent = roundTally
    }
    // console.log
})

// eventListener to for new game
newGameBtn.addEventListener('click', function (event) {
    for (var i = 0; i < 9; i++) {
        gridBoxes[i].classList.remove('cross-move')
        gridBoxes[i].classList.remove('naught-move')
    }
    turnCounter = 1
    playerMove = 'naught-move'
    winCondition = false
    roundTally = 1
    roundDisplay.textContent = roundTally
    
    oneNameInput.style.display = 'inline'
    oneNameBtn.style.display = 'inline'
    twoNameInput.style.display = 'inline'
    twoNameBtn.style.display = 'inline'

    pOneScore = 0
    pOneScoreDisplay.textContent = `Score: ${pOneScore}`
    pTwoScore = 0
    pTwoScoreDisplay.textContent = `Score: ${pTwoScore}`
    if (document.querySelector('body').classList.contains('sparta')) {
        pOneName = 'Spartan Soldier'
        pTwoName = 'Athenian Soldier'
    } else if (document.querySelector('body').classList.contains('hogwarts')) {
        pOneName = 'Harry Potter'
        pTwoName = 'Lord Voldemort'
    } else {
        pOneName = 'Player One'
        pTwoName = 'Player Two'
    }
    oneNameText.textContent = pOneName
    twoNameText.textContent = pTwoName
    resultMsg.textContent = `${pOneName}'s Turn`
})

// change player1 name
var oneNameInput = document.querySelector('.p1-name-input')
var oneNameBtn = document.querySelector('.p1-name-btn')
var oneNameText = document.querySelector('.p1-name-text')
oneNameBtn.addEventListener('click', function (event) {
    if (oneNameInput.value.length > 0) {
        pOneName = oneNameInput.value
        oneNameText.textContent = pOneName
        oneNameInput.value = ''
        turnDisplay.textContent = `${pOneName}'s Turn`
        oneNameInput.style.display = 'none'
        oneNameBtn.style.display = 'none'
    }
})

var twoNameInput = document.querySelector('.p2-name-input')
var twoNameBtn = document.querySelector('.p2-name-btn')
var twoNameText = document.querySelector('.p2-name-text')
twoNameBtn.addEventListener('click', function (event) {
    if (twoNameInput.value.length > 0) {
        pTwoName = twoNameInput.value
        twoNameText.textContent = pTwoName
        twoNameInput.value = '' 
        twoNameInput.style.display = 'none'
        twoNameBtn.style.display = 'none'
    }
})


// remove overlay
var themeOptions = document.querySelector('.theme-options')
var overlay = document.querySelector('.overlay')
themeOptions.addEventListener('click', function (event) {
    // overlay.classList.toggle('overlay-fade')
    overlay.style.visibility = 'hidden'
})

// change theme
var themeButton = document.querySelector('.change-theme')
themeButton.addEventListener('click', function (event) {
    overlay.style.visibility = 'visible'
})

// var themeClassList = 


// normal theme
var themesList = ['sparta']
var normalTheme = document.querySelector('.norml-theme')
normalTheme.addEventListener('click', function (event) {
    // for (var i = 0; i < classesArray.length; i++) {
    //     for (var j = 0; j < themesList.length; j++) {
    //         document.querySelector(classesArray[i]).classList.remove(themesList[j])
    //     }
        
    // }
    // document.querySelector('body').classList.remove('sparta')
})

// refresh page
var refreshBtn = document.querySelector('.refresh-button')
refreshBtn.addEventListener('click', function (event) {
    document.location.reload(true)
})