
let movieTitle = "spider"

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
    let myDiv= document.createElement("div")
    myDiv.innerText =  "data.Title"
    document.body.appendChild(myDiv)
    // movieContainer.innerHTML = `<li>  ${data.Year}  </li>`
    // movieContainer.innerHTML = `<li>  ${data.Released}  </li>`
    // movieContainer.innerHTML = `<img  src=${data.Poster}  >`

}