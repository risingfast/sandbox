//  showText.c - CGI to display contents of a text file
//  Author: Geoffey Jarman
//  Started: 28-Jul-2020
//  Refererences:
//  Log:
//      28-Jul-2020 started
//      29-Jul-2020 expanded to show file contents and formatted with style
//      16-Oct-2020 added web page styling to the output
//      25-Oct-2020 center the body of the html on the webpage
//      10-Feb-2021 webcode
//      26-Mar-2021 reviewed all
//      30-Sep-2021 remove HTML markeup and migrate to grid layout
//  Enhancements(0):

// includes and defines

#include <stdio.h>
#include <stdlib.h>
#define DATAFILE "data.txt"
#define MAXLEN 200

int main() {

    FILE *f;
    f = fopen (DATAFILE, "r");
    char cyText[MAXLEN];

// print the html content type and <head> block

    printf("Content-type: text/html\n\n");

// read text from the file and print it

    while (fgets(cyText, MAXLEN, f) != NULL) {
        printf("%s", cyText);
    };

    fclose(f);

    return 0;
}
