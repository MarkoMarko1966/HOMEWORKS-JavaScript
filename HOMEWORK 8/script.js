fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    return response.json();
}).then(json => {
    console.log(json);
})

fetch('https://jsonplaceholder.typicode.com/photos').then(response => {
    return response.json();
}).then(json => {
    // console.log(json);
    let arr = json.slice(0, 100);
    console.log(arr);
})