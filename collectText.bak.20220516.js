// collectText.js -- script to collect a line of text and save to the server
// Author: Geoff Jarman
// Started: 30-Sep-2021
// Log: 
//    30-Sep 2021 start and test
//    10-Oct-2021 prefix function names with 'f'
//    17-Oct-2021 change fRresetShow() to fClearPage()
//    17-Oct-2021 block sending an empty line
//    12-Nay-2022 change helpDiv to uppercase
//    12-Nay-2022 change "none" to "" on x.style.display
//    15-May-2022 remove function fShowHelp() moved to common.js
  
const uri1 = "http://www.risingfast.com/cgi-bin/showText.cgi";
const uri2 = "http://www.risingfast.com/cgi-bin/collectText.cgi";

// functions for action buttons to display and hide help
  
function fClearPage() {
    var s = document.getElementById("sendButton");
    var x = document.getElementById("HELPDIV");
    var y = document.getElementById("ResultArea");
    var z = document.getElementById("data");
    s.disabled=true;
    x.style.display = "";
    y.value = "";
    z.value = "";
}

// function to ajax fetch text from the server and paste it to a textarea

async function fGetResults() {
    let response = await fetch(uri1);
    if (response.ok) {
        let text = await response.text();
        document.getElementById("ResultArea").value=text;
    } else {
        alert("HttpError: " + response.status);
    }
}

async function fSaveText() {

    if (document.getElementById("data").value != "") {
        var uri3 = encodeURI(uri2 + '?data=' + document.getElementById("data").value);
        let response = await fetch(uri3);
        if (response.ok) {
            let text = await response.text();
            document.getElementById("ResultArea").value=text;
        } else {
            alert("HttpError: " + response.status);
        }
    }
    else {
        document.getElementById("ResultArea").value = "Nothing to send";
    }
}

function fEnableSend() {
    var s = document.getElementById("sendButton");
    s.disabled=false;
}
