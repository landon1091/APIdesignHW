
function aquireshopos() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
    request.addEventListener('load', function () {
        let shops = JSON.parse(request.responseText);
        console.log(shops);
        let parent = document.querySelector('#shops');

        for (let i = 0; i < shops.length; i++) {
            let element = document.createElement('li');
            let coffez = document.querySelector('#shops').innerHTML = "Coffee Shops" + ' ' + '(' + shops.length + ')';
            element.textContent = shops[i].name + ' ' + shops[i].rating + " " + shops[i].price;
            parent.appendChild(element);
        }
    });
    request.send();
}

function getmovies() {
    let request = new XMLHttpRequest();
    request.open('GET', "https://secret-springs-58890.herokuapp.com/api");
    request.addEventListener('load', function () {
        let movies = JSON.parse(request.responseText);
        console.log(movies);
        let parent = document.querySelector('#movies');
        for (let i = 0; i < movies.length; i++) {
            let element = document.createElement('li');
            let movietrack = document.querySelector('#movies').innerHTML = "Movies" + ' ' + '(' + movies.length + ')';
            element.textContent = movies[i].name + ' ' + movies[i].genre + " " + movies[i].rating;
            parent.appendChild(element);
        }
    });
    request.send();
}
function addShop() {
    let coffeeShop = {
        name: document.querySelector("#shopName").value,
        rating: document.querySelector('#shopRating').value,
        price: document.querySelector('#shopPrice').value,
    }

    let request = new XMLHttpRequest();
    request.open('POST', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
    request.send(JSON.stringify(coffeeShop));
}
function addMovies() {
    let newMovie = {
        name: document.querySelector("#movieName").value,
        rating: document.querySelector('#movieGenre').value,
        price: document.querySelector('#movieRating').value,
    }

    let request = new XMLHttpRequest();
    request.open('POST', "https://secret-springs-58890.herokuapp.com/api");
    request.send(JSON.stringify(newMovie));
}

window.addEventListener('load', function () {
    console.log('go time');
    aquireshopos();

    let submitBtn1 = document.querySelector('#addcoffee');
    submitBtn1.addEventListener('click', function () {
        addShop();
    });

    let submitBtn2 = document.querySelector('#addmovie');
    submitBtn2.addEventListener('click', function () {
        addMovies();
    });

    let coffeeChop = document.querySelector('#coffeeChops');
    let chopBtn = document.querySelector("#cofSho");
    chopBtn.addEventListener('click', function () {
        if (coffeeChop.className === "hidden") {
            coffeeChop.classList.remove("hidden");
        } else if (coffeeChop.className === "") {
            coffeeChop.classList.add("hidden");
        }
    });
    let movieChop = document.querySelector('#movieChop');
    let chopBtn2 = document.querySelector("#movies");
    chopBtn2.addEventListener('click', function () {
        if (movieChop.className === "hidden") {
            movieChop.classList.remove("hidden");
        } else if (movieChop.className === "") {
            movieChop.classList.add("hidden");
        }
    });
})