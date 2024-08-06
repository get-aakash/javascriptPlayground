
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let id = document.getElementById("num")
let createData = document.getElementById("submit")
let ulEl = document.getElementById("ul-el")

createData.addEventListener("click", function(){
    ulEl.innerHTML = "<li>"+ firstName.value +"</li>"+ "<li>"+ lastName.value +"</li>" + "<li>"+ id.value +"</li>"
})
