// multiply.js -- script to implement help in about.htm
// Author: Geoff Jarman
// Started: 19-Sep-2021
// Log: 
//    19-Sep-2021 start and test
//    10-Oct-2021 add 'f' prefix to function names
//    16-Oct-2021 change fResetHTML() to fClearPage()
//    16-Oct-2021 add help text to fClearPage()
//    11-May-2022 make helpDiv uppercase
//    12-May-2022 change "none" to "" for x.style.display
//    18-May-2022 extend clear function
//    01-Jum-2022 add cornerimage rotation
//    18-Jum-2022 move fSetCornerImage() to common.js

// functions for action buttons to display and hide help ..........................................

const uri1 = "http://www.risingfast.com/cgi-bin/multiply.cgi";

function fMultiplyJS () {
    var m = document.getElementById("number1").value;
    var n = document.getElementById("number2").value;
    var p = m * n;
    document.getElementById("ResultArea").value = p;
}

// function to ajax fetch text2 from the server

async function fMultiplyCGI() {
    
    var m = document.getElementById("number1").value;
    var n = document.getElementById("number2").value;

    const uri2 = uri1 + '?m=' + m + '&n=' + n;
    let response = await fetch(uri2);

    if (response.ok) {
        let text = await response.text();
        document.getElementById("ResultArea").value=text;
    } else {
        alert("HttpError: " + response.status);
    }

}

// function to clear text areas on the page and clear help

function fClearMultiplyPage() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("ResultArea").value = "";
    document.getElementById("HELPDIV").style.display = "";

    fcClearExtras();
}

