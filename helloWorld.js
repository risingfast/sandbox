// helloWorld.js -- script to implement simplest.html webpage to print server text on the web
// Author: Geoff Jarman
// Started: 29-Sep-2021
// Log: 
//    29-Sep 2021 start and test
//    09-Oct-2021 prefix funcion names with 'f'
//    11-May-2022 change helpDiv to HELPDIV
//    11-May-2022 change "none" to "" on x.style.display
//    18-May-2022 extend the clear function
//    01-Jun-2022 add cornerimage rotation
//    18-Jun-2022 add cornerimage rotation

const uri1 = "http://www.risingfast.com/cgi-bin/helloWorld.cgi";

// functions for action buttons to display and hide help ..........................................
  
function fClearHelloWorldPage() {
    var x = document.getElementById("HELPDIV");
    var y = document.getElementById("ResultArea");
    x.style.display = "";
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

