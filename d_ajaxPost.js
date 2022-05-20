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
//     14-May-2022 remove showHelp()
//     15-May-2022 change HELPDIV display.style from none to ""

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

function fClearAjaxPostPage() {
    document.getElementById("textArea1").value="";
    document.getElementById("HELPDIV").style.display = "";
    fClearExtras();
}
