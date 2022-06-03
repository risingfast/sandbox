// simplest.js -- script to implement simplest.html webpage to print server text on the web
// Author: Geoff Jarman
// Started: 29-Sep-2021
// Log: 
//    29-Sep 2021 start and test
//    29-Sep-2021 clear textarea in resetShow() attached to reset button
//    09-Oct-2021 prefix 'f' on function names
//    16-Oct-2021 change reset to clear
//    12-May-2022 change "none" to "" for x.style.display
//    17-May-2022 redefine the clear function
//    30-May-2022 add fSetCornerImage(ecd 
  
const uri1 = "http://www.risingfast.com/cgi-bin/simplest.cgi";
const uri2 = "http://www.risingfast.com/cgi-bin/setCornerImage.cgi";

// functions for action buttons to display and hide help ..........................................
  
function fShowHelp() {
    var x = document.getElementById("HELPDIV");
    if (x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "";
    }
}

function fClearSimplestPage() {
    var x = document.getElementById("HELPDIV");
    var y = document.getElementById("ResultArea");
    x.style.display = "none";
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

// function to ajax fetch the current corner image and captiona


async function fSetCornerImage() {
    let response = await fetch(uri2);
    if (response.ok) {
        let text = await response.text();
        let array = text.split("\n");
        document.getElementById("ASIDE2IMG").src=array[0]
        document.getElementById("ASIDE3-PARA").innerHTML=array[1];
    } else {
        alert("HttpError: " + response.status);
    }
}


