const $main = $("main");

// Asynchronous Request for data in JSON
$.ajax("./json/data.json")
// when arrives
.then(data => {
    data.forEach(movie => {
        //create new div to display movie info
        const $div = $("<div>");
        $div.html(`<h2 class="movie-title">${movie.title}</h2>
        <h3 class="movie-release">${movie.release_year}</h3>
        <img src="${movie.image}" />`);

        //append div
        $main.append($div);
    })
})
.catch(error => console.log(error));