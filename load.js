if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then((r) => {
            console.log(r)
        })
        .catch((r) => {
            console.log(r)
        })
}