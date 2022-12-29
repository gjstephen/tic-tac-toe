// function addThemeClass(className) {
//     for (var i = 0; i < gridBoxes.length; i++) {
//         gridBoxes[i].classList.add(`${className}`)
//     }

//     document.querySelector('body').classList.add(`${className}`)
//     document.querySelector('header').classList.add(`${className}`)
//     document.querySelector('.title').classList.add(`${className}`)
//     document.querySelector('.game-grid').classList.add(`${className}`)
//     document.querySelector('.p1-name-btn').classList.add(`${className}`)
//     document.querySelector('.p2-name-btn').classList.add(`${className}`)
//     document.querySelector('.header-image-a').classList.add(`${className}`)
//     document.querySelector('.header-image-b').classList.add(`${className}`)
//     document.querySelector('.dropdown-one').classList.add(`${className}`)
//     document.querySelector('.dropdown-two').classList.add(`${className}`)
//     document.querySelector('.p1-name-input').classList.add(`${className}`)
//     document.querySelector('.p2-name-input').classList.add(`${className}`)
//     document.querySelector('.p1-name-choice').classList.add(`${className}`)
//     document.querySelector('.p2-name-choice').classList.add(`${className}`)
//     document.querySelector('.player-one').classList.add(`${className}`)
//     document.querySelector('.player-two').classList.add(`${className}`)
//     document.querySelector('.p1-name-text').classList.add(`${className}`)
//     document.querySelector('.p2-name-text').classList.add(`${className}`)
//     dOneMenu.classList.add(`${className}`)
//     dOneMenu.classList.addClass(`${className}`)
// }

var classChangeList = document.querySelectorAll('.theme')

function addThemeClass(className) {
    for (var i = 0; i < classChangeList.length; i++) {
        classChangeList[i].classList.add(`${className}`)
    }
}

function removeThemeClass() {
    var themes = ['hogwarts', 'sparta']

    for (var i = 0; i < themes.length; i++) {
        for (var j = 0; j < classChangeList.length; j++) {
            classChangeList[j].classList.remove(`${themes[i]}`)
        }
    }
}