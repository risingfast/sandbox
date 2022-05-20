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
// Enhancements:
//

'use strict';

// const uri1 = "https://cors-anywhere.herokuapp.com/http://risingfast.com/cgi-bin/d_AjaxFetch.cgi";

const uri1 = "http://www.risingfast.com/cgi-bin/d_AjaxFetch1.cgi";
const uri2 = "http://www.risingfast.com/cgi-bin/d_AjaxFetch2.cgi";

//

// function to ajax fetch text2 from the server

async function fd_AjaxFetch1() {
    let response = await fetch(uri1);
    if (response.ok) {
        let text = await response.text();
        console.log(text.slice(0, 80));
        document.getElementById("TextArea1").value=(text + "\nFired by the AjaxFetch1() button");
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
        document.getElementById("TextArea2").value=(text + "\nFired by the AjaxFetch2() button");
        document.getElementById("MessageInput").value="d_AjaxFetch2() fired";
    } else {
        alert("HttpError: " + response.status);
    }
}

// function to clear existing text in text and message areas

function fClearTextAreas() {
    document.getElementById("TextArea1").value="";
    document.getElementById("TextArea2").value="";
    document.getElementById("MessageInput").value="";
}

// function to show help

function fShowHelp() {
    var x = document.getElementById("helpDiv");
    if (x.style.display === "none") {
        x.style.display = "block";$
    } else {
        x.style.display = "none";
    }
}
