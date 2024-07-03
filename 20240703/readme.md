# 20240703

## 迴圈

```js
let students = [];
students.push({
    name: 'David',
    age: 18
});

students.push({
    name: 'Helen',
    age: 20
});
```

### for loop

用於已知長度

```js
const useForLoop = () => {
    for (let i = 0; i < students.length; i++) {
        console.log(i, students[i])
    }
}
```

### foreach

用於未知長度，也可用於已知長度

```js
const useForeach = () => {
    for (let i in students) {
        console.log(i, students[i])
    }
}
```

### Array.forEach

Array物件提供的迴圈方法，每次執行時會丟會`(value, index) => {}`

```js
const useArrayForeach = () => {
    students.forEach((student, index) => {
        console.log(index, student);
    })
}
```

### while

- 容易形成無限迴圈
- 建議使用 for loop 替代

```js
let num = 0;

console.log(`run while before num is: ${num}`)

while (num < 10) {
    console.log(num);
    num++;
}

console.log(`run while after num is: ${num}`)

num = 0
console.log(`run for loop before num is: ${num}`)
for (; num < 10; num++) {
    console.log(num);
}

console.log(`run for loop after num is: ${num}`)
```

### do...while

- 先執行一次在判斷
- 容易形成無限迴圈
- 建議使用 for loop 替代

```js
let num = 10;

do {
    console.log(num);
    num++
} while (num < 10)

console.log(num);
```