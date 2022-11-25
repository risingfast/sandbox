// stripDebugInfo.c -- strip debug information for every CGI file in the current directory
// Started -- 11/17/2023
// Author -- Geoffrey Jarman
// Log:
//     11/17/2022 started
//     11/18/2022 add fPressEnterToContiue()
//     11/18/2022 add fRetitleConsole()
// Enahncements:
//

#include <dirent.h>
#include <stdio.h>
#include <stdlib.h>
#include <regex.h>
#include <string.h>
#include "../shared/rf50.h"
 
int main(int argc, char *argv[])
{
    DIR *d;
    struct dirent *dir;
    regex_t rgxPattern;                                                 // define a regular expreassion pattern variable
    int intRetVal;
    char crySysCmd[300] = {'\0'};

// clear the console and publish a banner and prompt the user to continue

    fRetitleConsole(argv[0] + 2);
    printf("\nThis program will strip debug information from all c-compiled .cgi programs in the current directory\n\n");
    fPressEnterToContinue();
    printf("\n");

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
    printf("\n");
    return EXIT_SUCCESS;
}
