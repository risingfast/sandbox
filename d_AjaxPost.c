//  d_ajaxPost.c -- accepts data from an ajax post and writes to a file d_ajaxPost.dat
//  Author: Geoffrey Jarman
//  Started: 20-Sep-2020
//  Reference:
//  Log:
//      20-Sep-2020 started
//      04-Jan-2021 webcode
//      27-Mar-2021 reviewed all
//      01-Oct-2021 print confirmation back to HTML page
//      01-Oct-2021 add a newline to the file output for each string

// includes and defines

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int main(int argc, char** argv) {

    FILE *fp1 = fopen("d_ajaxPost.dat", "a+");
    char arrWords[100] = {'\0'};

    printf("Content-Type: text/html\n\n");

    while (fgets(arrWords, 100, stdin) != NULL) {
        fputs(arrWords, fp1);
        fputs("\n", fp1);
    }
    fclose(fp1);
    
    return 0;
}
