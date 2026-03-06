function iniciarMandala(){

const canvas = document.createElement("canvas")

canvas.width = 300
canvas.height = 300

document.getElementById("modulos").appendChild(canvas)

const ctx = canvas.getContext("2d")

canvas.addEventListener("mousemove",(e)=>{

if(e.buttons===1){

ctx.fillStyle="#b57aff"

ctx.beginPath()

ctx.arc(e.offsetX,e.offsetY,10,0,Math.PI*2)

ctx.fill()

}

})

}