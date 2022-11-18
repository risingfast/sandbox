//  collectText.c - CGI to read a line of text and write to a file
//  Author: Geoffrey Jarman
//  Started: 16-Mar-2020
//  References:
//      http://jkorpela.fi/forms/cgic.html
//  Log:
//      26-Jul-2020 format the code and block with comments
//      26-Jul-2020 add a return link to risingfast.com
//      28-Jul-2020 expanded the <head> block
//      28-Jul-2020 split the unencode() function declaration from its definition
//      28-Jul-2020 add an internals button and internals detail
//      28-Jul-2020 add a timestamp to saved text in the text file
//      08-Sep-2020 add menu bar links
//      15-Oct-2020 format output of file contents to standard HTML RF page layout
//      25-Oct-2020 center the body of the html on the webpage
//      04-Jan-2021 webcode
//      26-Mar-2021 reviewed all
//      30-Sep-2021 remove HTML markeup and move to GRID layout
//      15-Sep-2022 add Access-Control-Allow-Origin: * CORS http header
//  Enhancements:
//

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <stdbool.h>
#include "../shared/rf50.h"
#define MAXLEN 80                                      // Max length of input string from html form
#define EXTRA 5                                               // 4 for field name "data", 1 for "="
#define MAXINPUT MAXLEN+EXTRA+2                      // 1 for added line break, 1 for trailing NULL
#define DATAFILE "data.txt"

void unencode(char *, char *, char *);

int main(void) {
    int    ilenstr;
    char   input[MAXINPUT];
    char   *sData = NULL;
    char   tsData[MAXINPUT + 40] = {'\0'};
    time_t tmeCurrTime;
    int    length = 0;
    bool   bShowAudit = false;

//    setenv("QUERY_STRING", "?data=this%20is%20more%20text", 1);

// print the html page content type header and CORS header> block

    printf("Content-type: text/html\n");
    printf("Access-Control-Allow-Origin: *\n\n");

// test for valid string input before writing to the file

    ilenstr = strlen(getenv("QUERY_STRING"));
    if(ilenstr == 0) {
        printf("Error - no GET string");
    }
    else {
        FILE *f;
        strcpy(input, getenv("QUERY_STRING"));
        sData = fUrlDecodeSpaces(input+EXTRA, bShowAudit);
        f = fopen(DATAFILE, "a");
        if(f == NULL) {
            printf("Sorry, cannot store your data.");
        }
        else {

// create a timestamp to combine with the text before saving

            time(&tmeCurrTime);
            strcpy(tsData, ctime(&tmeCurrTime));
            length = strlen(tsData);
            if (tsData[length - 1] == '\n') {     // remove the trailing newline from the timestamp
                tsData[length - 1] = '\0';
            }
            strcat(tsData, "::");
            strcat(tsData, sData);
            fputs(tsData, f);
            fputs("\n", f);
            printf("This text has been stored in /usr/lib/cgi-bin/data.txt");
        }

        fclose(f);
    }

    return 0;
}
