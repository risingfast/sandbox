// cookies.js -- script to add, show and delete cookies
// Author: Geoff Jarman
// Started: 07-Jul-2022
// References:
//      https://www.youtube.com/watch?v=j0PpT96EFeg -- Steve Griffith, Understanding Browser Cookies
// Log:
//    07-Jul-2022 copied from Steve Griffith's Gist via youtube

function fShowCookie() {
    if (document.cookie) {
        document.getElementById('showcookie-input').value = document.cookie;
    } else {
        document.getElementById('showcookie-input').value = 'No cookies currently';
    }
}

function fAddCookie() {
    let key = 'score';
    let value = encodeURIComponent('8745683465');
    let thirty = 60 * 60 * 24 * 30;
    document.cookie = `${key}=${value};path=/;max-age=${thirty};`; 
}

function fDeleteCookie() {
    let key = 'score';
    document.cookie = `${key}=;path=/;expires=Thu, 01 Jan 1970T00:00:00Z;`;
}

function fFetchCookie(event) {
    let key = 'score';
    let val = '';
    if (document.cookie.split(';').filter(item => item.trim().startsWith(`${key}=`))
        .length) {
        document.getElementById('showcookie-input').value = `${key} cookie key is found`;
    } else {
        document.getElementById('showcookie-input').value = `${key} cookie key not found`;
    }
    event.stopPropagation();
}

function fClearCookieFields(event) {
    document.getElementById('showcookie-input').value = '';
    document.getElementById('HELPDIV').style.display = "none";
    fcClearExtras();
    event.stopPropagation();
}

document.body.addEventListener('click', fShowCookie);
document.getElementById('btnAdd').addEventListener('click', fAddCookie);
document.getElementById('btnDel').addEventListener('click', fDeleteCookie);
document.getElementById('btnFind').addEventListener('click', fFetchCookie);
