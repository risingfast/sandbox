// DOM_Drills.js -- script to implement DOM manipulation drills
// Author: Geoff Jarman
// Started: 04-Aug-2021
// Log: 
//    04-Aug-2022 start and test


function fChangeParagraph() {
    const para1 = document.querySelector("#para1");
    const bttn1 = document.querySelector("#bttn1");
    if (para1.innerText == "Original Text") {
        para1.innerText = "Changed Text";
        bttn1.textContent = "Change Back";
    } else {
        para1.innerText = "Original Text";
        bttn1.textContent = "Change Text";
    } 
}

function fChangeTextColor() {
    const para1 = document.querySelector("#para1");
    const bttn2 = document.querySelector("#bttn2");
    const bttn2Color = bttn2.getAttribute("style");
    if (bttn2Color.style == "color:red") {
        para1.style = "color:blue";
        bttn1.textContent = "Change Back";
    } else {
        bttn2Color.style = "color:red";
        bttn2.textContent = "Change Color";
    } 
}

function fShowLongList() {
    ;
}
