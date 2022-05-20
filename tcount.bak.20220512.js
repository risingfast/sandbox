// tcount.js -- script to implement tcount.cgi webpage to print a counter to a web page
// Author: Geoff Jarman
// Started: 29-Sep-2021
// Log: 
//    30-Sep 2021 start and test
//    09-Oct-2021 prefix function names with 'f'
//    17-Oct-2021 change fResetShows() to fClearPage()
  
var x = document.getElementById("helpDiv");
const uri1 = "http://www.risingfast.com/cgi-bin/tcount.cgi";

// functions for action buttons to display and hide help ..........................................
  
function fShowHelp() {
    var x = document.getElementById("helpDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function fClearPage() {
    var x = document.getElementById("helpDiv");
    var y = document.getElementById("ResultArea");
    x.style.display = "none";
    y.value = "";
    console.log('Done like a dinner');
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
