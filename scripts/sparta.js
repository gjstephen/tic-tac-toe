// DOM variables
var spartaOption = document.querySelector('.sparta-option')
var dOneMenu = document.querySelector('.d-one-menu')
var dTwoMenu = document.querySelector('.d-two-menu')

// sparta theme event listener
spartaOption.addEventListener('click', function (event) {
    removeThemeClass()
    addThemeClass('sparta')
    spartaTextContent()
    // spartaClassToggle()
    // spartaNames()
    // spartaImages()
})

// function spartaClassToggle() {
//     for (var i = 0; i < gridBoxes.length; i++) {
//         gridBoxes[i].classList.toggle('sparta')
//     }

//     document.querySelector('body').classList.toggle('sparta')
//     document.querySelector('.title').classList.toggle('sparta')
//     document.querySelector('.game-grid').classList.toggle('sparta')
//     document.querySelector('.p1-name-btn').classList.toggle('sparta')
//     document.querySelector('.p2-name-btn').classList.toggle('sparta')
//     document.querySelector('.header-image-a').classList.toggle('sparta')
//     document.querySelector('.header-image-b').classList.toggle('sparta')
//     document.querySelector('.dropdown-one').classList.toggle('sparta')
//     document.querySelector('.dropdown-two').classList.toggle('sparta')
//     dOneMenu.classList.toggle('sparta')
// }

var classesArray = ['.title', '.game-grid', '.p1-name-btn', '.p2-name-btn', '.d-one-options', '.d-two-options']

function spartaTextContent() {
    document.querySelector('.title').textContent = 'The Peloponnesian War'
    oneNameBtn.textContent = 'Choose a name'
    twoNameBtn.textContent = 'Choose a name'

    pOneName = 'Spartan Soldier'
    oneNameText.textContent = pOneName
    pTwoName = 'Athenian Soldier'
    twoNameText.textContent = pTwoName
    turnDisplay.textContent = `${pOneName}'s Turn`
}

// var oneNameInput = document.querySelector('.p1-name-input')
// var oneNameBtn = document.querySelector('.p1-name-btn')
// var oneNameText = document.querySelector('.p1-name-text')
var namesList = {
    sparta: ['Menaleus', 'Leonidas', 'Arachidamia', 'Brasidas'],
    athens: ['Socrates', 'Alcibiades', 'Pericles', 'Thucydides']
}

function spartaNames() {
    oneNameInput.style.display = 'none'
    
    for (var i = 0; i < namesList.sparta.length; i++) {
       var name = document.createElement('p')
       name.textContent = namesList.sparta[i]
       name.classList.toggle('sparta')
       name.classList.toggle('d-one-options')
       dOneMenu.appendChild(name)
    }
    for (var i = 0; i < namesList.athens.length; i++) {
        var name = document.createElement('p')
        name.textContent = namesList.athens[i]
        name.classList.toggle('sparta')
        name.classList.toggle('d-two-options')
        dTwoMenu.appendChild(name)
}
}

// sparta name change event listener
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

function spartaImages() {
    var picOne = document.createElement('img')
    picOne.src = './images/laurel-wreath.png'
    document.querySelector('.header-image-a').appendChild(picOne)

    var picOne = document.createElement('img')
    picOne.src = './images/evil-eye.png'
    document.querySelector('.header-image-a').appendChild(picOne)
    
    var picTwo = document.createElement('img')
    picTwo.src = './images/evil-eye.png'
    document.querySelector('.header-image-b').appendChild(picTwo)

    var picTwo = document.createElement('img')
    picTwo.src = './images/laurel-wreath.png'
    document.querySelector('.header-image-b').appendChild(picTwo)
}