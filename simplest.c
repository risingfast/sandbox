//  simplest.c -  CGI to print a simple message on the web
//  Author: Geoff Jarman
//  Started: 03/10/2020
//  References: 
//      https://computer.howstuffworks.com/cgi3.htm
//  Log:
//      24-Jul-2020 comment and block the code with formatting
//      24-Jul-2020 add button to show and hide internals
//      25-Jul-2020 fix the text shown for internals
//      07-Sep-2020 add menu bar links
//      11-Oct-2020 center the navigation links in the main heading
//      25-Oct-2020 center the body of the html on the webpage
//      04-Jan-2021 webcode
//      26-Mar-2021 reviewed all
//      29-Sep-2021 remove HTML formatting and convert to Grid layout
//      16-Sep-2022 add Access-Control-Allow-Origin http CORS header
//  Enhancements(0)

#include <stdio.h>

int main(void) {

// print the html page content-type header and CORS header block

    printf("Content-type: text/html\n");
    printf("Access-Control-Allow-Origin: *\n\n");

    printf("Text created by simplest.cgi (written in C) running on Apache2 and Linux (Ubuntu)\n");

    return 0;
}
