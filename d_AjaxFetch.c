/*  d_AjaxFetch.c -- Ajax Fetch Test to return text from the server to an existing webpage
 *  Geoffrey Jarman 
 *  Started 08/31/2020 
 *  Ref: https://www.youtube.com/watch?v=_5yhmkDQqIQ&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=14
 */

#include <stdio.h>
#include <stdlib.h>

void main(void) {
    printf("Content-type: text/html\n");
    printf("Access-Control-Allow-Origin: *\n\n");

    printf("This text is from the webServer program d_AjaxFetch.cgi\n");
}
