# 20240717

## XMLHttpRequest

- `xml_request.html`
- `xml_request.js`

## fetch

- `fetch_request.html`
- `fetch_request.js`

## fetch GET POST 整理

```js
const doGet = async (url) => {
    let response = await fetch(url);
    return await response.json();
}

const doPost = async (url) => {
    let params = {
        action: 'demo',
        data: { a: 1, b: 2 }
    };

    let options = {
        method: 'POST',
        body: JSON.stringify(params)
    };

    let response = await fetch(url, options);
    return await response.json();
}
```