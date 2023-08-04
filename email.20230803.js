// email.js -- script to implement help in email.html
// Author: Geoff Jarman
// Started: 02-Oct-2021
// Log: 
//    02-Oct-2021 start and test
//    10-Oct-2021 add 'f' prefix to function names
//    10-Oct-2021 fix fClearHTML lines
//    12-May-2022 change helpDiv to uppercase
//    12-May-2022 change "none" to "" on x.style.display
//    16-May-2022 add fcClearExtras() to fClearEmailFields
//    01-Jun-2022 add cornerimage rotation
//    18-Jun-2022 move fSetCornerImage() to common.js

// function to clear all fiels on the email page if the 'Clear' button is pressed

function fClearEmailFields() {
    document.getElementById("emailName").value = "";
    document.getElementById("emailAddress").value = "";
    document.getElementById("emailSubject").value = "";
    document.getElementById("emailBody").value = "";
    fcClearExtras();
}

