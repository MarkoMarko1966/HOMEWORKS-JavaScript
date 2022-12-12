//zadaca 1

function exclaim(str) {
    return str + "!";
}
console.log(exclaim("Javascript"));

//zadaca 2

var books = [
    { title: "Book1", author: "Sokrat", price: 300 },
    { title: "Book2", author: "Hese", price: 400 },
    { title: "Book3", author: "Author3", price: 600 },
    { title: "Book4", author: "Author4", price: 500 },
    { title: "Book5", author: "Author5", price: 700 }
]

var filteredBooks = [];
function filterBooks(books){
    for(var book of books){
        if(book.price <= 400){
            filteredBooks.push(book);
        }
    }
}
filterBooks(books);
console.log(filteredBooks);

//zadaca3

function CountMs(str){
    var counter = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == "M"){
            counter++;
        }
    } 
    return console.log(counter);
}

CountMs("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM");


//zadaca4

