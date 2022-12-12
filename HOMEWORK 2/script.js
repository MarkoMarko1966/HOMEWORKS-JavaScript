//zadaca 1

var cake = {
    title: "vasina torta",
    servings: 10,
    ingredients: ["eggs", "flour", "chocolate"]
}

console.log(cake);

//zadaca 2

console.log(cake.title);
console.log(cake.servings);
console.log(`Ingredients: \n 1.${cake.ingredients[0]} \n 2.${cake.ingredients[1]} \n 3.${cake.ingredients[2]}`);

//zadaca 3

var programming_languages = ["C", "C++", "C#", "Java", "Javascript", "Pyton", "Ruby", "PHP"]; console.log(programming_languages.length);
programming_languages.pop();
console.log(programming_languages.length);
programming_languages.splice(2, 1, "R");
console.log(programming_languages);
