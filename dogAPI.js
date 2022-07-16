// d_template.js -- script to implement help in d_template.html
// Author: Geoff Jarman
// Started: 02-Jul-2022
// References:
//     https://www.youtube.com/watch?v=AVmGmLFcukM -- Dogs, JavaScript & An API
// Log: 
//    02-Jul=2-22 copy from d_template.js


async function fStart() {

    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    console.log(data);
}
