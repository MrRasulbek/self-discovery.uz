let menuButton = document.querySelector(".menu_button")
let active = document.querySelector(".active")
let menuList = document.querySelector(".first-section_list")
let menulink = document.querySelectorAll(".first-section_link")
menuButton.addEventListener("click", () => openMenu())
function openMenu() {
               menuButton.style = `display:none`
               active.style = `display: block; transition: 1s;`
               menuList.style = `top:0px; transition:1s;`
               for (let i = 0; i < menulink.length; i++) {
                              const element = menulink[i];
                              setTimeout(() => {
                                             element.style = `opacity:1; transition:1s;`
                              }, 1000);
               }
}
active.addEventListener("click", () => closeMenu())
function closeMenu() {
               menuButton.style = `display:block`
               active.style = `display:none`
               menuList.style = `top:-150%; transition:5s;`
               for (let i = 0; i < menulink.length; i++) {
                              const element = menulink[i];
                              setTimeout(() => {
                                             element.style = `opacity:0; transition:0.5s;`
                              }, 1000);
               }
}

let searchOpen = document.querySelector(".first-section_search")
let body = document.querySelector("body")
let searchOpenView = document.querySelector(".first-section_search_box")
searchOpen.addEventListener("click", () => searchOpenFunction())
function searchOpenFunction() {
               body.style = `height:100vh; overflow:hidden;`
               searchOpen.style = `visibility:hidden`
               searchOpenView.style = `visibility:visible; opacity:1; transition:1s;`
}

let searchClose = document.querySelector(".first-section_search-close")
searchClose.addEventListener("click", () => searchCloseFunction())
function searchCloseFunction() {
               body.style = `height:unset; overflow:unset;`
               searchOpen.style = `visibility:visible`
               searchOpenView.style = `visibility: hidden; opacity: 0; transition: 0.5s;`
}


let secondSectionText = document.querySelector(".second-section_text")
let secondSectionTextTextInformation = secondSectionText.innerHTML.trim()
secondSectionText.innerHTML = ""
function typing(i = 0) {
               secondSectionText.innerHTML += secondSectionTextTextInformation[i]
               i++
               if(i<secondSectionTextTextInformation.length){
                              setTimeout(() => {
                                    typing(i)         
                              }, 100);
               }
               else if (i==secondSectionTextTextInformation.length){
                              i = 0
                              setTimeout(() => {
                                             secondSectionText.innerHTML = ""
                                             typing(i)        
                              }, 2000);
               }
}
typing()