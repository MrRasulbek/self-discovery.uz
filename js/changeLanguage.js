let changeLanguage = document.querySelectorAll(".first-section_change_language")
let language = document.querySelectorAll(".change_language")
for (let i = 0; i < changeLanguage.length; i++) {
               const element = changeLanguage[i];
               element.setAttribute("language", "eng")
               element.addEventListener("click", function () {
                              let attribute = element.getAttribute("language")
                              if (attribute == "eng"){
                                             element.setAttribute("language", "uzb")
                                             console.log(element);
                                             for (let i = 0; i < language.length; i++) {
                                                            const element = language[i];
                                                            element.innerHTML = "Uzb"
                                             }
                              }
                              else if (attribute == "uzb"){
                                             console.log(element);
                                             element.setAttribute("language", "eng")
                                             for (let i = 0; i < language.length; i++) {
                                                            const element = language[i];
                                                            element.innerHTML = "Eng"
                                             }
                              }
               })
}
