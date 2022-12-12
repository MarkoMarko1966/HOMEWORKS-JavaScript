//zadaca 1

var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
var together = [];

for (var name1 of JohnFollowers){
    for(var name2 of JaneFollowers){
        if(name1 == name2){
            together.push(name1);
        }
    }
}

console.log(together);

//zadaca 2

var toPrint = "";

for(var i = 0; i <= 6; i++){
    for(var j = 0; j <= i; j++){
        toPrint += '#'; 
    }
    toPrint += '\n';
}
console.log(toPrint);

//zadaca 3

for(var i = 0; i <= 10; i++){
    console.log(`${i} * 9 = ${i * 9}`)
}

//bonus

for(var i = 1; i <= 10; i++){
    for(var j = 1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}