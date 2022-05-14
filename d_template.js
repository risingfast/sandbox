// d_template.js -- script to implement help in d_template.html
// Author: Geoff Jarman
// Started: 19-Sep-2021
// Log: 
//    19-Sep-2021 start and test
//    09-Oct-2021 clean up comments and remove unused functions
//    12-May=2022 change helpDiv to uppercasse

// functions for action buttons to display and hide help ..........................................
  
function fShowHelp() {
    var x = document.getElementById("HELPDIV");
    if (x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "";
    }
}
