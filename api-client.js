console.log("api-client geladen")

const API_KEY = "d46237a817853d71afbc937df6eb9ee3"
const apiURL = ("https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY)

async function getData() {
    const res = await fetch(apiURL, { method: "GET" })
    const data = await res.json()
    return data
}


