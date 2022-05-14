// email.js -- script to implement help in email.html
// Author: Geoff Jarman
// Started: 02-Oct-2021
// Log: 
//    02-Oct-2021 start and test
//    10-Oct-2021 add 'f' prefix to function names
//    10-Oct-2021 fix fClearHTML lines
//    12-May-2022 change helpDiv to uppercase
//    12-May-2022 change "none" to "" on x.style.display

// functions for action buttons to display and hide help ................................................................
  
function fShowHelp() {
    var x = document.getElementById("HELPDIV");
    if (x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "";
    }
}

// function to clear page if 'Clear' button is pressed ..................................................................

function fClearHTML() {
    document.getElementById("emailName").value = "";
    document.getElementById("emailAddress").value = "";
    document.getElementById("emailSubject").value = "";
    document.getElementById("emailBody").value = "";
    var x = document.getElementById("HELPDIV");
    x.style.display = "none";
}

