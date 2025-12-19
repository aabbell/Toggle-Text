const toggle = document.querySelector(".toggle")
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")


btn.addEventListener("click" ,() => {
    if (toggle.textContent === "off"){
        toggle.textContent = "on"
        toggle.style.color = "black"
        toggle.style.textTransform = "uppercase"
        container.style.backgroundImage = "url('meme.jpg')"
        container.style.backgroundSize = "cover";       
        container.style.backgroundPosition = "center";  
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
        btn.style.textTransform = "uppercase"

    }
    else{
        toggle.textContent = "off"
        toggle.style.color = "white"
        toggle.style.textTransform = "lowercase"
        container.style.backgroundImage = "none";
        container.style.backgroundColor = "black"
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
        btn.style.textTransform = "lowercase"
    }

})
console.log(toggle.textContent)