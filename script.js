
const fetchPromise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=68ee6aa7a509b956382fa8853b7507e0`)

fetchPromise.then(response=>{
    return response.json()
}).then(data=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})