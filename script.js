console.log("script geladen")

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const data = await getMovieGenres()
        data.genres.forEach(function (item) {
            const namePlusID = ("genre naam: " + item.name + " id: " + item.id);
            const genresList = document.querySelector("#genres-list")
            const genresListItem = document.createElement("li")
            genresListItem.innerHTML = namePlusID
            genresList.appendChild(genresListItem)
        })
    } catch (e) {
        console.log("error")
        console.log(e)
    }
})

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const data = await getTopMovie()
        const movieTitle = data.movie_results[0].title
        const TopMovieTitle = document.querySelector("#top-movie")
        TopMovieTitle.innerHTML = movieTitle
    } catch (e) {
        console.log("error")
        console.log(e)
    }
})

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const data = await getTopRatedActionMovies()
        data.results.forEach(function (item) {
            const TRAtitle = item.title
            const TRAList = document.querySelector("#top-rated-action")
            const TRAListItem = document.createElement("li")
            TRAListItem.innerHTML = TRAtitle
            TRAList.appendChild(TRAListItem)
        })
    } catch (e) {
        console.log("error")
        console.log(e)
    }
})

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const data = await getMovies1975()
        data.results.forEach(function (item) {
            const SFtitle = item.title
            const SFList = document.querySelector("#SF-movies")
            const SFListItem = document.createElement("li")
            SFListItem.innerHTML = SFtitle
            SFList.appendChild(SFListItem)
        })
    } catch (e) {
        console.log("error")
        console.log(e)
    }
})