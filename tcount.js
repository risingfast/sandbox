// tcount.js -- script to implement tcount.cgi webpage to print a counter to a web page
// Author: Geoff Jarman
// Started: 29-Sep-2021
// Log: 
//    30-Sep 2021 start and test
//    09-Oct-2021 prefix function names with 'f'
//    17-Oct-2021 change fResetShows() to fClearPage()
//    12-May-2022 change helpDiv to uppercase
//    12-May-2022 change "none" to "" on x.style.display
//    15-May-2022 remove fShowHelp() now in common.js
//    18-May-2022 extend clear function
  
const uri1 = "http://www.risingfast.com/cgi-bin/tcount.cgi";

// functions for action buttons to display and hide help ..........................................

function fCleartCountPage() {
    var x = document.getElementById("HELPDIV");
    var y = document.getElementById("ResultArea");
    x.style.display = "";
    y.value = "";
    
    fClearExtras();
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
