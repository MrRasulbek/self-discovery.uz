let logo = document.querySelector(".logo")
let root = document.querySelector(":root")
function random(min, max) {
               return Math.round(Math.random() * (max - min) + min)
}
function color() {
               let r = random(0,255)
               let g = random(0,255)
               let b = random(0,255)
               return `rgb(${r},${g},${b})`
}
logo.addEventListener("click", function () {
               root.style.setProperty("--blue", color())
})