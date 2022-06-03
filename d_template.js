// d_template.js -- script to implement help in d_template.html
// Author: Geoff Jarman
// Started: 19-Sep-2021
// Log: 
//    19-Sep-2021 start and test
//    09-Oct-2021 clean up comments and remove unused functions
//    12-May-2022 change helpDiv to uppercasse
//    15-May-2022 remove fShowHelp() moved to common.js
//    16-May-2022 add fClearExtras
//    01-Jun-2022 add cornerimage rotation

const uri2 = "http://www.risingfast.com/cgi-bin/setCornerImage.cgi";

function fClearTemplateFields() {
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
        alert("HttpError: " + response.status);                                                                               }
}

