# 20240715

## TODO增加項目到列表

```js
const generateIndex = () => {
    return Math.floor(Math.random() * 1000);
}

const originLi = (name) => {
    let li = document.createElement('li')
    let checkbox = document.createElement('input')
    let label = document.createElement('label');

    let index = generateIndex();
    checkbox.type = 'checkbox';
    checkbox.id = `todo-item-${index}`;
    label.innerHTML = name;
    label.htmlFor = `todo-item-${index}`;

    li.appendChild(checkbox);
    li.appendChild(label);
    return li;
}

const strLi = (name) => {
    let index = generateIndex();
    return `<li>
        <input type="checkbox" id="todo-item-${index}">
        <label for="todo-item-${index}">${name}</label>
    </li>`
}

const addItem = (name) => {
    // let li = originLi(name);
    // todo.appendChild(li);


    let li = strLi(name);
    todo.innerHTML += li;
}
```