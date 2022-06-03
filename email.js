// email.js -- script to implement help in email.html
// Author: Geoff Jarman
// Started: 02-Oct-2021
// Log: 
//    02-Oct-2021 start and test
//    10-Oct-2021 add 'f' prefix to function names
//    10-Oct-2021 fix fClearHTML lines
//    12-May-2022 change helpDiv to uppercase
//    12-May-2022 change "none" to "" on x.style.display
//    14-May-2022 move fShowHelp() to common.js
//    16-May-2022 add fClearExtras() to fClearEmailFields
//    01-Jun-2022 add cornerimage rotation

const uri2 = "http://www.risingfast.com/cgi-bin/setCornerImage.cgi";

// function to clear all fiels on the email page if the 'Clear' button is pressed

function fClearEmailFields() {
    document.getElementById("emailName").value = "";
    document.getElementById("emailAddress").value = "";
    document.getElementById("emailSubject").value = "";
    document.getElementById("emailBody").value = "";
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

  
