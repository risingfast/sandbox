// autheticateUser.js -- script to implement CG call in authenticateUser.html
// Author: Geoff Jarman
// Started: 24-Sep-2021
// Log: 
//    24-Sep 2021 start and test
//    24-Sep 2021 add fAuthenticateUser() and fClear()
//    25-Sep-2021 add idResult field to fClear()
//    25-Sep-2021 set focus() on username in fClear()
//    16-Oct-2021 add to fClearHTML to clear help()
//    11-May-2022 change helpDiv to uppercase
//    12-May-2022 change "none" to "" on x.style.display
//    15-May-2022 remove function showHelp() moved to common.js
//    01-Jun-2022 add cornerimage rotation

const uri1 = "http://www.risingfast.com/cgi-bin/authenticateUser.cgi";
const uri2 = "http://www.risingfast.com/cgi-bin/setCornerImage.cgi";

// functions for action buttons to display and hide help ..........................................
  
function resetShows() {
    var x = document.getElementById("HELPDIV");
    x.style.display = "";
}

async function fAuthenticateUser() {
    
    var sUsername = document.getElementById("idUsername").value;
    var sPassword = document.getElementById("idPassword").value;

    fClearAuthenticateUserPage();
    document.getElementById("ResultArea").disabled = false;

    const uri2 = uri1 + '?Username=' + sUsername + '&Password=' + sPassword;
    let response = await fetch(uri2);

    if (response.ok) {
        let text = await response.text();
        document.getElementById("ResultArea").value= text;
    } else {
        document.getElementById("ResultArea").value= "CGI Call Failed";
    }
    document.getElementById("ResultArea").disabled = true;
}

function fClearAuthenticateUserPage() {
    document.getElementById("idUsername").value = "";
    document.getElementById("idPassword").value = "";
    document.getElementById("ResultArea").value = "";
    document.getElementById("idUsername").focus();
    var x = document.getElementById("HELPDIV");
    x.style.display = "";

    fClearExtras();
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

