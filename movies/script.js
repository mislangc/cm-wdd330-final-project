const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieSection = document.getElementById("movies");

const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.querySelector(".search");

async function getMovies(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    console.log(responseData);
    showsMovies(responseData.results);
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange"
    } else {
        return "red";
    }
}

getMovies(APIURL);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchFind = search.value;
    if(searchFind) {
        getMovies(SEARCHAPI + searchFind);
        search.value = "";
    }
})

function showsMovies(movies) {
    main.innerHTML = "";
    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = `
                <img
                    src="${IMGPATH + poster_path}"
                    alt="Poster image of the movie ${title}"
                />
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                ${overview}
                </div>
        `;

        main.appendChild(movieDiv);
    });
}