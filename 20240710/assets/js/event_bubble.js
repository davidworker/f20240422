let addBtn = document.querySelector('#add-btn');
let lis = document.querySelectorAll('#menu > li');

lis.forEach((li, index) => {
    li.addEventListener('click', () => {
        console.log(li.innerHTML)
    })
})


addBtn.addEventListener('click', () => {
    let ul = document.querySelector('#menu');
    let li = document.createElement('li');
    li.innerHTML = 'ADD';
    ul.appendChild(li);
    // 如何讓增加的 li 也可以綁定 click 事件?
    // ul.innerHTML += '<li>ADD</li>'
})