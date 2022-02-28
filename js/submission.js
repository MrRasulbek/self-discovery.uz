let submissionTitle = document.querySelector(".submission_title")
let submissionTextOne = document.querySelector(".submission_text_1")
let submissionTextTwo = document.querySelector(".submission_text_2")
let submissionTick = document.querySelector(".submission_tick")
let submissionLink = document.querySelector(".submission_come-back_link")
setTimeout(() => {
       submissionTitle.style = `transform: translateY(0px); transition:1s;`        
       submissionTextOne.style = `transform: translateY(0px); transition:2s; opacity:1;`        
}, 1000);
setTimeout(() => {
               submissionTextTwo.style = `transform: translateY(0px); transition:3s; opacity:1;`        
}, 1500);
setTimeout(() => {
               submissionTick.style = `transform: scale(1); transition:1s;`        
}, 4000);
setTimeout(() => {
               submissionLink.style = `transform: scale(1); transition:1s;`
}, 5000);
