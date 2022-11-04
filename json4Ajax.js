// json4Ajax.js -- script to fetch JSON from the server and show on a web page
// Author: Geoff Jarman
// Started: 28-Oct-2022
// Log: 
//    28-Oct-2022 -- started
//    29-Oct-2022 -- add decision logic to the response status
//    29-Oct-2022 -- add fEnalbeDisableFetchButton()

function fClearTemplateFields() {
    fcClearExtras();
}

// functions fetch a simple JSON file from the server ------------------------------------------------------------------

const uri01 = "http://gjarman2020.com/cgi-bin/json4Ajax.cgi";

async function fFetchJSON() {
    
    let uri02 = uri01 + "?Instruction=" + document.getElementById("instruction-select").value
    let response = await fetch(uri02);

    if (response.ok) {
        let jsonText = await response.json();
        let sMessage = document.getElementById("message-input");
        if (jsonText.Status === 'Failure') {
            sMessage.value = jsonText.Status + ': ' + jsonText["Error Message"];
        } else if (jsonText.Status === 'Success') {
            sMessage.value = jsonText.Status;
            document.getElementById("results-area").value = jsonText.Result;
        } else if (jsonText.Status === 'Unknown') {
            sMessage.value = jsonText.Status + ': ' + jsonText["Error Message"];
            document.getElementById("results-area").value = '';
        }
    } else {
        alert("HttpError: " + response.status);
    }
}

function fEnableDisableFetchButton() {
    let sInstruction = document.getElementById("instruction-select").value
    let fetchbutton = document.getElementById("fetch-button");

// clear any text from the message and results areas

    document.getElementById("results-area").value = '';
    document.getElementById("message-input").value = '';

// enable or disable the fetch button based on a valid or invalid choice of instruction

    if ((sInstruction === 'Success') || (sInstruction === 'Failure')) {
        fetchbutton.removeAttribute('disabled');
    } else {
        fetchbutton.setAttribute('disabled', 'disabled');
    }
}
