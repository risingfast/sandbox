// d_ajaxPost.js Send a post to apache using Ajax
// Author: Geoffrey Jarman
// Started: 09/19/2020
// References: https://www.youtube.com/watch?v=gL8M9Sl5QLs&list=PLyuRouwmQCjkWu63mHksI9EA4fN-vwGs7&index=5
// 
//     19-Oct-2020 start
//     20-Oct-2020 second attempt
//     01-Oct-2021 move to grid layout
//     01-Oct-2021 add a clear()
//     10-Oct-2021 prefix function names with 'f'
//     12-May-2022 change helpDiv to uppercase

// functions for action buttons to display and hide help ..........................................
  
function fShowHelp() {
    var x = document.getElementById("HELPDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function fd_ajaxPost() {
    const root = '/cgi-bin/';
    let url = root + 'd_ajaxPost.cgi';

    strData = document.getElementById("textArea1").value;

    let options = {
        method: 'POST',
        body: strData
    }

    let req = new Request(url, options);

    fetch(req)
      .then ((response) => {
            if(response.ok) {
            document.getElementById("textArea1").value="Text posted to d_ajaxPost.dat on the server";
            return response.text();
            }
       else {
           throw new Error('Bad HTTP')
            }
       })
       .then( (j) => {
            console.log(j);
       })
          .catch( (err) => {
              console.log('ERROR:', err.message);
     })
}

function fClearPage() {
    document.getElementById("textArea1").value="";
    document.getElementById("HELPDIV").style.display = "none";
}
