// d_ajaxFetch.js
// Author: Geoff Jarman
// References: 
//     https://www.youtube.com/watch?v=_5yhmkDQqIQ&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=14
//      https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
 
// Log:
//    31-Aug-2020 start
//    01-Sep-2020 troubleshoot CORS block and add proxy prefix to uri1 and uri2
//    01-Sep-2020 encapsulate into a function and assign to buttons
//    02-Sep-2020 write a separate function for each action button and a separate CGI
//    02-Sep-2020 add an Internals button and text
//    02-Sep-2020 migrate to risingfast.com
//    02-Oct-2021 move to grid layout
//    10-Oct-2021 rename functions with 'f' prefix
//    12-May-2022 convert helpDiv to uppercase
//    12-May-2022 change "none" to "" on x.style.display
//    15-May-2022 remove fShowHelp() moved to common.js
//    01-Jun-2022 add cornerimage rotation
// Enhancements:
//

'use strict';

// const uri1 = "https://cors-anywhere.herokuapp.com/http://risingfast.com/cgi-bin/d_AjaxFetch.cgi";

const uri1 = "http://www.risingfast.com/cgi-bin/d_AjaxFetch1.cgi";
const uri2 = "http://www.risingfast.com/cgi-bin/d_AjaxFetch2.cgi";
const uri3 = "http://www.risingfast.com/cgi-bin/setCornerImage.cgi";
//

// function to ajax fetch text2 from the server

async function fd_AjaxFetch1() {
    let response = await fetch(uri1);
    if (response.ok) {
        let text = await response.text();
        console.log(text.slice(0, 80));
        document.getElementById("text1-area").value=(text + "\nFired by the AjaxFetch1() button");
        document.getElementById("MessageInput").value="d_AjaxFetch1() fired";
    } else {
        alert("HttpError: " + response.status);
    }
}

// function to ajax fetch text2 from the server

async function fd_AjaxFetch2() {
    let response = await fetch(uri2);
    if (response.ok) {
        let text = await response.text();
        console.log(text.slice(0, 80));
        document.getElementById("text2-area").value=(text + "\nFired by the AjaxFetch2() button");
        document.getElementById("MessageInput").value="d_AjaxFetch2() fired";
    } else {
        alert("HttpError: " + response.status);
    }
}

// function to clear existing text in text and message areas

function fClearTextAreas() {
    document.getElementById("text1-area").value="";
    document.getElementById("text2-area").value="";
    document.getElementById("MessageInput").value="";

    fClearExtras();
}

// function to ajax fetch the current corner image and caption

async function fSetCornerImage() {
    let response = await fetch(uri3);
    if (response.ok) {
        let text = await response.text();
        let array = text.split("\n");
        array.pop();                      // remove the last element (empty element) created by the split("\n")
        let intRecords = array.length/3;
        let intRecordSelected = Math.trunc(Math.random() * intRecords);
        document.getElementById("ASIDE2IMG").src=array[intRecordSelected * 3]
        document.getElementById("ASIDE3-PARA").innerHTML=array[(intRecordSelected * 3) + 1];
    } else {
        alert("HttpError: " + response.status);
    }
}

