/*  d_AjaxFetch2.c -- Ajax Fetch Test2 to return text from the server to an existing webpage
 *  Geoffrey Jarman
 *  Started 08/31/2020
 *  Ref: https://www.youtube.com/watch?v=_5yhmkDQqIQ&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=14
 *  Log:
 *      09/02/2020 Changed from d_AjaxFetch.c to d_AjaxFetch2.c and modified printf message text
 *  Enhancements:
 */

#include <stdio.h>
#include <stdlib.h>

void main(void) {
    printf("Content-type: text/html\n\n");
    printf("This text is generated from the webServer program d_AjaxFetch2.cgi\n");
}
