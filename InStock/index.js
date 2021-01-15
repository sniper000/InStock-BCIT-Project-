const searchButton = document.querySelectorAll("button"),
searchBar = document.getElementById("searchBox");

searchButton[0].addEventListener("click", function (event) {
    location.href = "https://instock.henrylindev.repl.co/search_results.html?search="+ searchBar.value 
});
