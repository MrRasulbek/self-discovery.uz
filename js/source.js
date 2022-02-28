let textInformation = document.querySelector(".source_information")
let informationText = textInformation.innerHTML
textInformation.innerHTML = ""
iteration = 0
textInformation.style = `padding:0px 15px`
function typing() {
               textInformation.innerHTML += informationText[iteration]
               iteration++
               if (iteration < informationText.length) {
                              setTimeout(() => {
                                             typing()
                              }, 100);
               }
               else if (iteration == informationText.length) {
                              setTimeout(() => {
                                             iteration = 0
                                             textInformation.innerHTML = ""
                                             typing()
                              }, 3000);

               }
}
typing()