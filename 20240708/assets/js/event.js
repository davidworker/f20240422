let cBtn = document.querySelector('#c-btn');
let cLink = document.querySelector('#c-link');

const clickType = 'click'
const clickCallback = () => {
    console.log('clicked.')
}

cBtn.addEventListener(clickType, clickCallback)
cLink.addEventListener(clickType, clickCallback)

// cBtn.addEventListener(clickType, () => {
//     console.log('clicked.')
// })