function rand(){
    button.innerText = Math.floor(Math.random()*7)
}

let button = document.getElementById("rand-button")
button.addEventListener("click", rand)

