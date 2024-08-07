
let movieTitle = "spider"
let myDiv = document.getElementById("movieContainer")
//

async function  getMovie(movieTitle){
    const apiUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=7d7f6780`
    const fetchPromise = fetch(apiUrl)
    fetchPromise.then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data)
        displayMovie(data)
    })
}

getMovie(movieTitle)

function displayMovie(data){
    console.log(data)
    let para = document.createElement("p")
    para.innerHTML = `${data.Title}`
    myDiv.appendChild(para)
   
    let img = document.createElement("img")
    img.src = `${data.Poster}`
    myDiv.appendChild(img)
    let span = document.createElement("p")
    span.innerHTML = `${data.imdbRating}`
    myDiv.appendChild(span)


}