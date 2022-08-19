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
    fCreateBreedList(data.message);
}

fStart();

function fCreateBreedList(breedList) {
    document.getElementById("breed-div").innerHTML = `
        <select onchange="loadByBreed((this.value)">
            <option>Choose a dog breed</option>
            ${Object.keys(breedList).map(function (breed) {
                return `<option>${breed}</option>`
            }).join('')}
        </select>
    `
}

async function loadByBreed(breed) {
    if (breed != 'Choose a dog breed') {
        const response = await (fetch(`https//dog.ceo/api/breed/${breed}/images`));
    }
}