//  d_AjaxFetch1.c -- Ajax Fetch Test to return text from the server to an existing webpage
//  Author: Geoffrey Jarman
//  Started 02-Sep-2020
//  References:
//      https://www.youtube.com/watch?v=_5yhmkDQqIQ&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=14
//  Log:
//      02-Sep-2020 start
//      02-Sep-2020 create as a copy of d_AjaxFetch2.c
//      04-Jan-2021 webcode
//      27-Mar-2021 reviewed all
//  Enhancements:

// includes and defines

#include <stdio.h>
#include <stdlib.h>

void main(void) {
    printf("Content-type: text/html\n\n");
    printf("This text is generated from the webServer program d_AjaxFetch1.cgi\n");
}
