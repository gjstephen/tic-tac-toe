// DOM variables
var hogwartsOption = document.querySelector('.hogwarts-option')
var dOneMenu = document.querySelector('.d-one-menu')
var dTwoMenu = document.querySelector('.d-two-menu')

// hogwarts theme event listener
hogwartsOption.addEventListener('click', function (event) {
    hogwartsTextContent()
    hogwartsClassToggle()
    hogwartsNames()
    hogwartsImages()
})

function hogwartsClassToggle() {
    for (var i = 0; i < gridBoxes.length; i++) {
        gridBoxes[i].classList.toggle('hogwarts')
    }

    document.querySelector('body').classList.toggle('hogwarts')
    document.querySelector('.title').classList.toggle('hogwarts')
    document.querySelector('.game-grid').classList.toggle('hogwarts')
    document.querySelector('.p1-name-btn').classList.toggle('hogwarts')
    document.querySelector('.p2-name-btn').classList.toggle('hogwarts')
    document.querySelector('.header-image-a').classList.toggle('hogwarts')
    document.querySelector('.header-image-b').classList.toggle('hogwarts')
    document.querySelector('.dropdown-one').classList.toggle('hogwarts')
    document.querySelector('.dropdown-two').classList.toggle('hogwarts')
    dOneMenu.classList.toggle('hogwarts')
}

var classesArray = ['.title', '.game-grid', '.p1-name-btn', '.p2-name-btn', '.d-one-options', '.d-two-options']

function hogwartsTextContent() {
document.querySelector('.title').textContent = 'Harry Potter and the Game of Tic Tac Toe'
}

// var oneNameInput = document.querySelector('.p1-name-input')
// var oneNameBtn = document.querySelector('.p1-name-btn')
// var oneNameText = document.querySelector('.p1-name-text')
var namesList = {
    hogwarts: ['Menaleus', 'Leonidas', 'Arachidamia', 'Brasidas'],
    athens: ['Socrates', 'Alcibiades', 'Pericles', 'Thucydides']
}

function hogwartsNames() {
    oneNameInput.style.display = 'none'
    oneNameBtn.textContent = 'Choose a name'
    twoNameInput.style.display = 'none'
    twoNameBtn.textContent = 'Choose a name'

    for (var i = 0; i < namesList.hogwarts.length; i++) {
       var name = document.createElement('p')
       name.textContent = namesList.hogwarts[i]
       name.classList.toggle('hogwarts')
       name.classList.toggle('d-one-options')
       dOneMenu.appendChild(name)
    }
    for (var i = 0; i < namesList.athens.length; i++) {
        var name = document.createElement('p')
        name.textContent = namesList.athens[i]
        name.classList.toggle('hogwarts')
        name.classList.toggle('d-two-options')
        dTwoMenu.appendChild(name)
}
}

// hogwarts name change event listener
dOneMenu.addEventListener('click', function (event) {
    var target = event.target
    oneNameText.textContent = target.textContent
    pOneName = target.textContent
    if (turnCounter === 1) {
        turnDisplay.textContent = `${pOneName}'s turn`
    }
})
dTwoMenu.addEventListener('click', function (event) {
    var target = event.target
    twoNameText.textContent = target.textContent
    pTwoName = target.textContent

})

function hogwartsImages() {
    var picOne = document.createElement('img')
    picOne.src = '../images/laurel-wreath.png'
    document.querySelector('.header-image-a').appendChild(picOne)

    var picOne = document.createElement('img')
    picOne.src = '../images/evil-eye.png'
    document.querySelector('.header-image-a').appendChild(picOne)
    
    var picTwo = document.createElement('img')
    picTwo.src = '../images/evil-eye.png'
    document.querySelector('.header-image-b').appendChild(picTwo)

    var picTwo = document.createElement('img')
    picTwo.src = '../images/laurel-wreath.png'
    document.querySelector('.header-image-b').appendChild(picTwo)
}

