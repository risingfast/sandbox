// multiply.js -- script to implement help in about.htm
// Author: Geoff Jarman
// Started: 19-Sep-2021
// Log: 
//    19-Sep-2021 start and test
//    10-Oct-2021 add 'f' prefix to function names
//    16-Oct-2021 change fResetHTML() to fClearPage()
//    16-Oct-2021 add help text to fClearPage()

// functions for action buttons to display and hide help ..........................................

const uri1 = "http://www.risingfast.com/cgi-bin/multiply.cgi";

function fShowHelp() {
    var x = document.getElementById("helpDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function fMultiplyJS () {
    var m = document.getElementById("number1").value;
    var n = document.getElementById("number2").value;
    var p = m * n;
    document.getElementById("result").value = p;
}

// function to ajax fetch text2 from the server

async function fMultiplyCGI() {
    
    var m = document.getElementById("number1").value;
    var n = document.getElementById("number2").value;

    const uri2 = uri1 + '?m=' + m + '&n=' + n;
    let response = await fetch(uri2);

    if (response.ok) {
        let text = await response.text();
        document.getElementById("result").value=text;
    } else {
        alert("HttpError: " + response.status);
    }

}

function fClearPage() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result").value = "";
    document.getElementById("helpDiv").style.display = "none";
}
