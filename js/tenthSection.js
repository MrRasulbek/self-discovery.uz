let timelink = document.querySelectorAll(".time_link")
let timeInput = document.querySelector(".time_input")
let timeOpen = document.querySelector(".tenth-section_time_icon")
let timeListMenu = document.querySelector(".time_list_menu")
let submitLink = document.querySelector(".tenth-section_submit_link")
let inputName = document.querySelector(".input_name")
let inputEmail = document.querySelector(".input_email")
let inputEmailTitle = document.querySelector(".input_email_title")
let inputNameTitle = document.querySelector(".input_name_title")
let inputLocationTitle = document.querySelector(".input_location_title")
let inputTimeTitle = document.querySelector(".input_time_title")
let nameIconAnimationOriginal = document.querySelector(".name_icon_animation_original")
let emailIconAnimationOriginal = document.querySelector(".email_icon_animation_original")
let locationIconAnimationOriginal = document.querySelector(".location_icon_animation_original")
let timeIconAnimationOriginal = document.querySelector(".time_icon_animation_original")



let departmentlink = document.querySelectorAll(".department_link")
let departmentInput = document.querySelector(".department_input")
let departmentOpen = document.querySelector(".tenth-section_department_icon")
let departmentListMenu = document.querySelector(".department_list_menu")
for (let i = 0; i < timelink.length; i++) {
               const element = timelink[i];
               element.addEventListener("click", () => clickTime())
               function clickTime() {
                              let inputNametime = element.innerHTML.trim()
                              timeInput.value = inputNametime
                              timeListMenu.style = `transition:0.5s; display: none;`
                              timeOpen.setAttribute("class", "tenth-section_time_icon fal fa-angle-down")
               }

}

timeOpen.addEventListener("click", () => timeOpenFunction())
function timeOpenFunction() {
               let signDown = timeOpen.getAttribute("class")
               if (signDown == "tenth-section_time_icon fal fa-angle-down"){
                              timeListMenu.style = `transition:2s; display: block;`
                              timeOpen.setAttribute("class", "tenth-section_time_icon fal fa-angle-up")
               }
               else if (signDown == "tenth-section_time_icon fal fa-angle-up"){
                              timeListMenu.style = `transition:2s; display: none;`
                              timeOpen.setAttribute("class", "tenth-section_time_icon fal fa-angle-down")
               }
}



for (let j = 0; j < departmentlink.length; j++) {
               const elementdepartment = departmentlink[j];
               elementdepartment.addEventListener("click", () => clickDepartment())
               function clickDepartment() {
                              let inputNameDepartment = elementdepartment.innerHTML.trim()
                              departmentInput.value = inputNameDepartment
                              departmentListMenu.style = `transition:0.5s;`
                              departmentOpen.setAttribute("class", "tenth-section_department_icon fal fa-angle-down")
               }
}

departmentOpen.addEventListener("click", () => departmentOpenFunction())
function departmentOpenFunction() {
               let signDown = departmentOpen.getAttribute("class")
               if (signDown == "tenth-section_department_icon fal fa-angle-down"){
                              departmentListMenu.style = `transition:2s; display: block;`
                              departmentOpen.setAttribute("class", "tenth-section_department_icon fal fa-angle-up")
               }
               else if (signDown == "tenth-section_department_icon fal fa-angle-up"){
                              departmentListMenu.style = `transition:2s; display: none;`
                              departmentOpen.setAttribute("class", "tenth-section_department_icon fal fa-angle-down")
               }
               console.log(signDown);
}

submitLink.addEventListener("click", function () {
               if (timeInput.value === "") {
                              inputTimeTitle.style = `color:red`
                              timeIconAnimationOriginal.setAttribute("class", "time_icon_animation fal fa-arrow-right")
               }
               if (timeInput.value != "") {
                              inputTimeTitle.style = `color:#23A6F0`
                              timeIconAnimationOriginal.setAttribute("class", "time_icon_animation_original fal fa-arrow-right")
               }
               if (departmentInput.value === "") {
                              inputLocationTitle.style = `color:red`
                              locationIconAnimationOriginal.setAttribute("class", "location_icon_animation_original_animation fal fa-arrow-right")
               }
               if (departmentInput.value != "") {
                              inputLocationTitle.style = `color:#23A6F0`
                              locationIconAnimationOriginal.setAttribute("class", "location_icon_animation_original fal fa-arrow-right")
               }
               if (inputEmail.value === "") {
                              inputEmailTitle.style = `color:red`
                              emailIconAnimationOriginal.setAttribute("class", "email_icon_animation fal fa-arrow-right")
               }
               if (inputEmail.value != "") {
                              inputEmailTitle.style = `color:#23A6F0`
                              emailIconAnimationOriginal.setAttribute("class", "email_icon fal fa-arrow-right")
               }
               if (inputName.value === "") {
                              inputNameTitle.style = `color:red`
                              nameIconAnimationOriginal.setAttribute("class", "name_icon_animation fal fa-arrow-right")
               }
               if (inputName.value != "") {
                              inputNameTitle.style = `color:#23A6F0`
                              nameIconAnimationOriginal.setAttribute("class", "name_icon fal fa-arrow-right")
               }
})


submitLink.addEventListener("click", function () {
               if (timeInput.value != "" && departmentInput.value != "" && inputEmail.value != "" && inputName.value != "") {
                              setTimeout(() => {
                                             submitLink.setAttribute("href", "./submission.html")
                                             submitLink.setAttribute("class", "tenth-section_submit_link tenth-section_submit_link_animation-scale text-font-1")
                                             submitLink.innerHTML = `Please, click again to submit`
                                             submitLink.style = `background-color: white; color:#23A6F0;  transition:1s; border: 1px solid #23A6F0; `
                              }, 500);
               }
               else if (timeInput.value === "" || departmentInput.value === "" || inputEmail.value === "" || inputName.value === "") {
                              submitLink.innerHTML = `Please, enter the required information`
                              submitLink.style = `background-color: white; color:red; border: 1px solid red; transition:1s;`
                              submitLink.setAttribute("class", "tenth-section_submit_link tenth-section_submit_link_animation-scale text-font-1")
               }
})