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
//    01-Jun-2022 add cornerimage rotation
  
const uri1 = "http://www.risingfast.com/cgi-bin/tcount.cgi";
const uri2 = "http://www.risingfast.com/cgi-bin/setCornerImage.cgi";

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

// function to ajax fetch the current corner image and caption

async function fSetCornerImage() {
    let response = await fetch(uri2);
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

