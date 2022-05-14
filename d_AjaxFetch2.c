//  d_AjaxFetch2.c -- Ajax Fetch Test2 to return text from the server to an existing webpage
//  Author: Geoffrey Jarman
//  Started: 31-Aug-2020
//  References:
//      https://www.youtube.com/watch?v=_5yhmkDQqIQ -- Steve Griffith Javascript Fetch
//  Log:
//      31-Aug-s0s0 start
//      02-Sep-2020 change from d_AjaxFetch.c to d_AjaxFetch2.c and modify printf message text
//      22-Mar-2021 reviewed all
//      22-Mar-2021 webcode
//  Enhancements(0):

// includes and defines

#include <stdio.h>
#include <stdlib.h>

void main(void) {
    printf("Content-type: text/html\n\n");
    printf("This text is generated from the webServer program d_AjaxFetch2.cgi\n");
}
