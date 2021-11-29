console.log("script geladen")

const startLoading = async function () {
    const data = await getData()
    console.log(data)
}

startLoading()