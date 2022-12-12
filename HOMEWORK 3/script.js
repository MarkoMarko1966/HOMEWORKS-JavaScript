//zadaca 1

var code = "en";
if(code === "en")
    console.log("Hello World in English");
else if(code === "de")
    console.log("Hello World in German");
else if(code === "es")
    console.log("Hello World in Spanish");  
else
    console.log("Hello World in another language");

//zadaca 2

var month = prompt('Enter month');
if (month == 'September' || month == 'October' || month == 'November')
    console.log("the month is Autumn.")
else if (month == 'December' || month == 'January' || month == 'February')
    console.log("the month is Winter.")
else if (month == 'March' || month == 'April' || month == 'May')
    console.log("the month is Spring.")
else if (month == 'June' || month == 'July' || month == 'August')
    console.log("the season is Summer.")
else 
    console.log("wrong typo.")

//zadaca 3

var band_members_num = 6;
switch (band_members_num){
    case 1:
        console.log('This band is a mono.')
        break;
    case 2:
         console.log('This band is a duo.')
        break;
    case 3: 
        console.log('This band is a trio.')
        break;
    case 4:
        console.log('This band is a quadra.')
        break;
    case 5:
        console.log('This band is a penta.')
        break;
    case 6:
        console.log('This band is a hexa.')
        break;
    case 7:
        console.log('This band is a hepa.')
        break;
    case 8:
        console.log('This band is a octa.')
        break;
    case 9:
        console.log('This band is a nano.')
        break;
    case 10:
        console.log('This band is a deca.')
}