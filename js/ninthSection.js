let images = document.querySelectorAll(".slider_img")
let iteration = 0
function slider() {
               let element = images[iteration]
               element.style = `opacity:1; transition:2.5s; transform: scale(1);`
               iteration++
               if (iteration < images.length) {
                              setTimeout(() => {
                                             slider()
                              }, 10000);
               }
               else if (iteration == images.length) {
                              iteration = 0
                              setTimeout(() => {
                                             slider()
                              }, 10000);
               }
}
slider()
let nextIteration = 0
function sliderRemove() {
               let element = images[nextIteration]
               element.style = `opacity:0; transition:2.5s; transform:scale(0);`
               nextIteration++
               if (nextIteration < images.length) {
                              setTimeout(() => {
                                             sliderRemove()
                              }, 10000);
               }
               else if (nextIteration == images.length) {
                              nextIteration = 0
                              setTimeout(() => {
                                             sliderRemove()
                              }, 10000);
               }
}
setTimeout(() => {
               sliderRemove()
}, 10000);