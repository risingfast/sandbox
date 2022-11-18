// stripDebugInfo.c -- run the strip command for every CGI file in the current directory *
// started -- 11/17/2023
// author -- Geoffrey Jarman
// log:
//     11/17/2022 started
// enahncements:
//
//

#include <dirent.h>
#include <stdio.h>
#include <stdlib.h>
#include <regex.h>
#include <string.h>
 
int main(void)
{
    DIR *d;
    struct dirent *dir;
    regex_t rgxPattern;                                                 // define a regular expreassion pattern variable
    int intRetVal;
    char crySysCmd[300] = {'\0'};

    intRetVal = regcomp(&rgxPattern, ".*cgi$", 0);           // compile the regular expression for CGI file name matches

    if (intRetVal != 0) {                                                              // exit if the compilation failed
        return EXIT_FAILURE;
    }

    d = opendir(".");
    if (d)
    {
        while ((dir = readdir(d)) != NULL)                              // read each filename from the current directory
        {
            if (regexec(&rgxPattern, dir->d_name, 0, NULL, 0) == 0) {  // strip each filename matching the regex pattern
                sprintf(crySysCmd, "strip %s", dir->d_name);
                printf("%s\n", crySysCmd);
                system(crySysCmd);
            }
        }
        closedir(d);
    }
    return EXIT_SUCCESS;
}
