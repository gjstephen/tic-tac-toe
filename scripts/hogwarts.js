// DOM variables
var hogwartsOption = document.querySelector('.hogwarts-option')
var dOneMenu = document.querySelector('.d-one-menu')
var dTwoMenu = document.querySelector('.d-two-menu')

// hogwarts theme event listener
hogwartsOption.addEventListener('click', function (event) {
    removeThemeClass()
    hogwartsTextContent()
    // hogwartsClassToggle()
    // hogwartsImages()
    // classToggle('hogwarts')
    addThemeClass('hogwarts')
})

// function hogwartsClassToggle() {
//     for (var i = 0; i < gridBoxes.length; i++) {
//         gridBoxes[i].classList.toggle('hogwarts')
//     }

//     document.querySelector('body').classList.toggle('hogwarts')
//     document.querySelector('header').classList.toggle('hogwarts')
//     document.querySelector('.title').classList.toggle('hogwarts')
//     document.querySelector('.game-grid').classList.toggle('hogwarts')
//     document.querySelector('.p1-name-btn').classList.toggle('hogwarts')
//     document.querySelector('.p2-name-btn').classList.toggle('hogwarts')
//     document.querySelector('.header-image-a').classList.toggle('hogwarts')
//     document.querySelector('.header-image-b').classList.toggle('hogwarts')
//     document.querySelector('.dropdown-one').classList.toggle('hogwarts')
//     document.querySelector('.dropdown-two').classList.toggle('hogwarts')
//     document.querySelector('.p1-name-input').classList.toggle('hogwarts')
//     document.querySelector('.p2-name-input').classList.toggle('hogwarts')
//     document.querySelector('.p1-name-choice').classList.toggle('hogwarts')
//     document.querySelector('.p2-name-choice').classList.toggle('hogwarts')
//     document.querySelector('.player-one').classList.toggle('hogwarts')
//     document.querySelector('.player-two').classList.toggle('hogwarts')
//     document.querySelector('.p1-name-text').classList.toggle('hogwarts')
//     document.querySelector('.p2-name-text').classList.toggle('hogwarts')
//     dOneMenu.classList.toggle('hogwarts')
// }



var classesArray = ['.title', '.game-grid', '.p1-name-btn', '.p2-name-btn', '.d-one-options', '.d-two-options']

function hogwartsTextContent() {
    document.querySelector('.title').textContent = 'Harry Potter  '
    var subTitle = document.createElement('span')
    subTitle.textContent =  'and the Game of Tic Tac Toe'
    subTitle.classList.add('sub-title')
    subTitle.classList.add('hogwarts')
    document.querySelector('.title').append(subTitle)

    pOneName = 'Harry Potter'
    oneNameText.textContent = pOneName
    pTwoName = 'Lord Voldemort'
    twoNameText.textContent = pTwoName
    if (turnCounter === 1) {
        turnDisplay.textContent = `${pOneName}'s turn`
    }
}

// var oneNameInput = document.querySelector('.p1-name-input')
// var oneNameBtn = document.querySelector('.p1-name-btn')
// var oneNameText = document.querySelector('.p1-name-text')


function hogwartsImages() {
    var picOne = document.createElement('img')
    picOne.src = './images/harry-potter-image.png'
    document.querySelector('.player-one').append(picOne)
    
    var picTwo = document.createElement('img')
    picTwo.src = './images/voldemort-image.png'
    document.querySelector('.player-two').append(picTwo)
}
