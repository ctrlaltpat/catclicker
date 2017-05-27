var mainView = document.getElementById("main-view");
var catBtn = document.getElementById("cat-btn");

function Cat(name, photo){
    this.name = name;
    this.photo = photo;
    this.counter = 0;
}

function AddCat(cat){
    var catContainer = document.createElement("div");
    catContainer.classList.add("cat-container");

    var catName = document.createElement("p");
    catName.classList.add("cat-name");
    catName.innerHTML = cat.name;
    catContainer.appendChild(catName);

    var catPhoto = document.createElement("img");
    catPhoto.classList.add("cat-photo");
    catPhoto.src = cat.photo;
    catContainer.appendChild(catPhoto);
    catPhoto.id = "" + cat.name;
    catPhoto.addEventListener("click", function(){
        catPhoto.nextSibling.innerHTML = parseInt(catPhoto.nextSibling.innerHTML) + 1;
    });

    var clickCounter = document.createElement("p");
    clickCounter.classList.add("click-counter");
    clickCounter.innerHTML = cat.counter;
    catContainer.appendChild(clickCounter);

    mainView.appendChild(catContainer);
}

var mittens = new Cat("Mittens", "../images/mittens.jpeg");
var meoweisha = new Cat("Meoweisha", "../images/meoweisha.jpg");
var byakuya = new Cat("Byakuya", "../images/byakuya.jpg");
var sammy = new Cat("Sammy", "../images/sammy.jpeg");
var merlin = new Cat("Merlin", "../images/Merlin.jpeg");
var whiskey = new Cat("Whiskey", "../images/whiskey.jpg");

var cats = [mittens, meoweisha, byakuya, sammy, merlin, whiskey];

catBtn.addEventListener("click", function(){
    if (cats.length > 0){
        var newCat = cats.shift();
        AddCat(newCat);
        // AddCat(cats.shift());
    } else {
        catBtn.style.display = "none";
        alert("There aren't anymore cats to add :'(")
    } 
});


