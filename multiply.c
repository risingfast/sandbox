//  multiply.c -- mutliply two numbers in a cgi script and show the results
//  Author: Geoffrey Jarman
//  Started: 15-Sep-2020
//  Reference: http://jkorpela.fi/forms/cgic.html
//  Log:
//      07/22/2020 clean up the HTML print statements and simplified the html page layout
//      07/24/2020 add a return link to the html form to enter two numbers
//      07/28/2020 expand the <head> block
//      07/29/2020 add an Internals button to show mechanics on results
//      10/11/2020 center the navigation links in the main heading
//      10/25/2020 center the body of the html on the webpage
//      04-Jan-2021 webcode
//      26-Mar-2021 reviewed all
//      22-Sep-2021 renamed from multVars.c to multiply.c
//      23-Sep-2021 changed to return a simple product without a prefix
//  Enhancements(0):

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    char *data;
    long m, n, p;

//    setenv("QUERY_STRING","m=3&n=2", 1);

// fetch the query string and process the contents

    printf("Content-type: text/javascript");
    printf("\n\n");

    data = getenv("QUERY_STRING");

    sscanf(data,"m=%ld&n=%ld", &m, &n);
    p = m * n;
    printf("%ld", p);
    return 0;
}

