// helloWorld.js -- script to implement simplest.html webpage to print server text on the web
// Author: Geoff Jarman
// Started: 29-Sep-2021
// Log: 
//    29-Sep 2021 start and test
//    29-Sep-2021 clear textarea in resetShow() attached to reset button
//    09-Oct-2021 prefix funcion names with 'f'
//    16-Oct-2021 change fResetShows() to fClearPage()
//    11-May-2022 change helpDiv to HELPDIV
//    11-May-2022 change "none" to "" on x.style.display
  
var x = document.getElementById("HELPDIV");
const uri1 = "http://www.risingfast.com/cgi-bin/helloWorld.cgi";

// functions for action buttons to display and hide help ..........................................
  
function fShowHelp() {
    var x = document.getElementById("HELPDIV");
    if (x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "";
    }
}

function fClearPage() {
    var x = document.getElementById("HELPDIV");
    var y = document.getElementById("ResultArea");
    x.style.display = "none";
    y.value = "";
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
