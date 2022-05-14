// d_template.js -- script to implement help in d_template.html
// Author: Geoff Jarman
// Started: 19-Sep-2021
// Log: 
//    19-Sep-2021 start and test
//    09-Oct-2021 clean up comments and remove unused functions

// functions for action buttons to display and hide help ..........................................
  
function fShowHelp() {
    var x = document.getElementById("helpDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
