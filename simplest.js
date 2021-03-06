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
const uri2 = "http://www.risingfast.com/cgi-bin/checkAuthentication.cgi";

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

async function fCheckAuthentication() {
    let response = await fetch(uri2);
    if (response.ok) {
        let text = await response.text();
        let text1 = text.split("\n");
        if (text1[0] === "Success") {
            document.getElementById("unsecured-div").style.display="none";
            document.getElementById("secured-div").style.display="block";
            document.getElementById("SESSION1PARA").innerHTML="Session: " + text1[1] + "<BR>User: " + text1[2] + "<BR>Name: " + text1[3] + "<BR>" + text1[4] + "<BR>At: " + text1[5];
        } else {
            document.getElementById("secured-div").style.display="none";
            document.getElementById("unsecured-div").style.display="block";
            document.getElementById("SESSION1PARA").innerHTML='No authenticated user';
        }
    }
}
