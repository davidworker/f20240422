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