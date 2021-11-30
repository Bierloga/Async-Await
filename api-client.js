console.log("api-client geladen")

const API_KEY = "d46237a817853d71afbc937df6eb9ee3"

async function getMovieGenres() {
    let genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY
    const res = await fetch(genreURL, { method: "GET" })
    const data = await res.json()
    return data
}

async function getTopMovie() {
    let topMovieURL = "https://api.themoviedb.org/3/find/tt0240515?api_key=d46237a817853d71afbc937df6eb9ee3&external_source=imdb_id"
    const res = await fetch(topMovieURL, { method: "GET" })
    const data = await res.json()
    return data
}

async function getTopRatedActionMovies() {
    let topRatedActionURL = "https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&api_key=d46237a817853d71afbc937df6eb9ee3"
    const res = await fetch(topRatedActionURL, { method: "GET" })
    const data = await res.json()
    return data
}

async function getMovies1975() {
    let URL1975 = "https://api.themoviedb.org/3/discover/movie?api_key=d46237a817853d71afbc937df6eb9ee3&primary_release_year=1975"
    const res = await fetch(URL1975, {method: "GET"})
    const data = await res.json()
    return data
}

