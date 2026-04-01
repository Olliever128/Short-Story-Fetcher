function getStory(){

    fetch("https://shortstories-api.onrender.com/")
    .then(response => response.json())
    .then(data => {

        document.getElementById("title").innerText = data.title

        document.getElementById("story").innerText = data.story

    })

}


const container = document.getElementById("particles")

const numberOfParticles = 25

for(let i = 0; i < numberOfParticles; i++){

    const particle = document.createElement("div")

    particle.classList.add("particle")

    // random size (like h2 or bigger)
    const size = 80 + Math.random()*150

    particle.style.width = size + "px"
    particle.style.height = size + "px"

    // random position
    particle.style.top = Math.random()*100 + "%"
    particle.style.left = Math.random()*100 + "%"

    // random pink shade
    const colors = [
        "#ffd6e7",
        "#ffc0dd",
        "#ffb6d9",
        "#ffe6f0"
    ]

    particle.style.background =
        colors[Math.floor(Math.random()*colors.length)]

    // blob shape
    particle.style.borderRadius =
        Math.random()*50 + "% " +
        Math.random()*50 + "% " +
        Math.random()*50 + "% " +
        Math.random()*50 + "%"

    container.appendChild(particle)

}