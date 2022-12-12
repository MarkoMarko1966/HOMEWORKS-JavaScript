// zadaca 1

var flag = true;
var img = document.getElementById('img1');
img.addEventListener("click", function () {
    if (flag == true){
        img.classList.add("classOn");
    }
    else {
        img.classList.remove("classOn");
    }
    flag = !flag;
});

// zadaca 2

var elements = document.getElementsByTagName('p');
for (var item of elements){
    item.classList.add("description");
}

// zadaca 3