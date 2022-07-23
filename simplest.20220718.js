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
//    31-May-2021 add math.random() to fSetCornerImage()
//    18-Jun-2022 move fSetCornerImage() to common.js
  
const uri1 = "http://www.risingfast.com/cgi-bin/simplest.cgi";

function fClearSimplestPage() {
    var x = document.getElementById("HELPDIV");
    var y = document.getElementById("ResultArea");
    x.style.display = "none";
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

