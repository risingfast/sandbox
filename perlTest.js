// perlTest.js -- script to implement perlTest.html webpage to print a text message from a perl cgi script
// Author: Geoff Jarman
// Started: 15-Jul-2022
// Log: 
//    15-Jul-2022 start by copying helloWorld.js

const uri1 = "http://www.risingfast.com/cgi-bin/pl_PerlTest.pl";
const uri2 = "http://www.risingfast.com/cgi-bin/setCornerImage.cgi";

// functions for action buttons to display and hide help ..........................................
  
function fClearPerlTestPage() {
    var x = document.getElementById("HELPDIV");
    var y = document.getElementById("ResultArea");
    x.style.display = "";
    y.value = "";

    fcClearExtras();
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

// function to ajax fetch the current corner image and captiona

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
