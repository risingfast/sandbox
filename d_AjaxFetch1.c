/*  d_AjaxFetch1.c -- Ajax Fetch Test to return text from the server to an existing webpage
 *  Geoffrey Jarman 
 *  Started 09/02/2020 
 *  Ref: https://www.youtube.com/watch?v=_5yhmkDQqIQ&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=14
 *  Log:
 *      09/02/2020 Created as a copy of d_AjaxFetch2.c
 *  Enhancements:
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    printf("Content-type: text/html\n");
    printf("Access-Control-Allow-Origin: *\n\n");

    printf("This text is generated from the webServer program d_AjaxFetch1.cgi\n");
    return 0;
}
