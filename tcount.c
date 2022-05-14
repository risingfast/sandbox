//  tcount.c - CGI incrementing counter saving to a file
//  Author: Geoff Jarman
//  Started: 13-Mar-2020
//  References:
//      http://www6.uniovi.es/cscene/topics/web/cs2-12.xml.html
//  Log:
//      13-Mar-2020 start
//      07/25/2020 comment and block the code with formatting
//      07/25/2020 add button to show and hide internals
//      09/08/2020 add menu bar links and remove return link from page body and reformat text
//      10/11/2020 center the navigation links on the top main heading
//      10/25/2020 center the body of the html on the webpage
//      04-Jan-2021 webcode
//      26-Mar-2021 reviewed all
//      30-Sep-2021 remove HTML layouts to migrate to GRID and Ajax
//      30-Sep-2021 change the message when the counter displays
//      21-Mar-2022 add fclose();
//  Enhancements(0):

#include <stdio.h>

int main(void) {

    FILE *fptrFile;
    int count;

// print the html page content type and <head> block

    printf("Content-type: text/html\n\n");
// open the data file and throw an error if it can't be opened

    if (!(fptrFile=fopen("tcount.dat","r"))) {
        printf("Error opening file tcount.dat for reading\n");
        printf("Exiting.\n");
        return 1;

// read the number from the data file and increment by 1

    } else {
        fscanf(fptrFile,"%i\n",&count);
        printf("Counter Value (re-fetch or refresh to increment): %i\n" ,++count);
        fclose(fptrFile);

// open the file for writing and throw an error if it can't be opened -

        if (!(fptrFile=fopen("tcount.dat","w"))) {
            printf("Error opening counter file tcount.dat for writing\n");
            printf("Exiting.\n");
            return 2;

// write the new counter value to the file

        } else {
            fprintf(fptrFile,"%i\n",count);
        }
    }

    fclose(fptrFile);

   return 0;
}
