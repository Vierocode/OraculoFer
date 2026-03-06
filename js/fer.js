const dialogo = document.getElementById("dialogo")

const frases = [

"Hola 👋",
"Explora tu mente 🧠",
"Respira profundo 🌬️",
"No olvides interactuar ✨",
"Estoy aquí para guiarte 💜"

]

function hablar(){

dialogo.innerText = frases[Math.floor(Math.random()*frases.length)]

dialogo.style.display="block"

setTimeout(()=>{

dialogo.style.display="none"

},4000)

}

setInterval(hablar,8000)