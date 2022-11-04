// json4Ajax.c -- test program to create cgi to return a json file
// author     -- Geoffrey Jarman
// started    -- 27-Oct-2022
// references:
//    https://www.youtube.com/watch?v=dQyXuFWylm4&t=8s -- How to Parse JSON in C
//    https://github.com/json-c/json-c -- json-c on github
//    https://linuxprograms.wordpress.com/2010/08/19/json_object_new_object/
// log:
//    28-Oct-2022 -- started
//    29-Oct-2022 -- add exception traps for invalid QUERY_STRING parameters
//    31-Oct-2022 -- replace caInstruction fixed array with sInstruction string for dynamic sizing

#include <stdio.h>
#include <stdlib.h>
#include <json-c/json.h>
#include <string.h>

int main() {

    char *sQueryString = NULL;
    char *sInstruction = NULL;

// print the html page content type header and CORS header> block ------------------------------------------------------

    printf("Content-type: text/html\n");
    printf("Access-Control-Allow-Origin: *\n\n");

    sQueryString = getenv("QUERY_STRING");

// test for a null QUERY_STRING when submitted from the console --------------------------------------------------------

    if (sQueryString == NULL) {
        printf("QUERY_STRING is NULL. Expecting QUERY_STRING=\"Instruction=<instruction>\". Ending json4Ajax.cgi");
        printf("\n\n");
        return EXIT_FAILURE;
    }

// test for a empty QUERY_STRING when submitted from the console -------------------------------------------------------

    if (sQueryString[0] == '\0') {
        printf("QUERY_STRING is empty. Expecting QUERY_STRING=\"Instruction=<instruction>\". Ending json4Ajax.cgi");
        printf("\n\n");
        return EXIT_FAILURE;
    }

// create memory for sInstruction --------------------------------------------------------------------------------------

    sInstruction = calloc(strlen(sQueryString), sizeof(char));

// Fetch the arguments in the QUERY_STRING -----------------------------------------------------------------------------

    sscanf(sQueryString, "Instruction=%s", sInstruction);

// test for a valid parameter name in QUERY_STRING ---------------------------------------------------------------------

    if (sInstruction[0] == '\0') {
        printf("QUERY_STRING is \"%s\". Expecting QUERY_STRING=\"Instruction=<instruction>\". Ending json4Ajax.cgi", sQueryString);
        printf("\n\n");
        free(sInstruction);
        return EXIT_FAILURE;
    }

// test for a vaiid instruction parameter argument in QUERY_STRING -----------------------------------------------------

    if ((strcmp(sInstruction, "Success") != 0) && (strcmp(sInstruction, "Failure") != 0) && (strcmp(sInstruction, "Unknown") != 0)) {
        printf("Invalid instruction: QUERY_STRING=\"%s\" (not \"Instruction=Success\" or \"Failure\" or \"Unknown\"). Ending json4Ajax.cgi", sQueryString);
        printf("\n\n");
        free(sInstruction);
        return EXIT_FAILURE;
    }

// create a json object ------------------------------------------------------------------------------------------------

    json_object *jsonCgiResp = json_object_new_object();


    if (strcmp(sInstruction, "Failure") == 0) {

// create json strings and build and print the JSON response for failure -----------------------------------------------

        json_object *jsonStatus = json_object_new_string("Failure");
        json_object *jsonErrorMessage = json_object_new_string("No matching record found");
        json_object *jsonResult = json_object_new_string("");

        json_object_object_add(jsonCgiResp, "Status", jsonStatus);
        json_object_object_add(jsonCgiResp, "Error Message", jsonErrorMessage);
        json_object_object_add(jsonCgiResp, "Result", jsonResult);

        printf("%s\n", json_object_to_json_string(jsonCgiResp));

    } else if (strcmp(sInstruction, "Success") == 0) {

// create json strings and build and print the JSON response for success -----------------------------------------------

        json_object *jsonStatus = json_object_new_string("Success");
        json_object *jsonErrorMessage = json_object_new_string("");
        json_object *jsonResult = json_object_new_string("Valid instruction identified and processed");

        json_object_object_add(jsonCgiResp, "Status", jsonStatus);
        json_object_object_add(jsonCgiResp, "Error Message", jsonErrorMessage);
        json_object_object_add(jsonCgiResp, "Result", jsonResult);

        printf("%s\n", json_object_to_json_string(jsonCgiResp));

    } else {

        json_object *jsonStatus = json_object_new_string("Unknown");
        json_object *jsonErrorMessage = json_object_new_string("Choose a valid instruction");
        json_object *jsonResult = json_object_new_string("");

        json_object_object_add(jsonCgiResp, "Status", jsonStatus);
        json_object_object_add(jsonCgiResp, "Error Message", jsonErrorMessage);
        json_object_object_add(jsonCgiResp, "Result", jsonResult);

        printf("%s\n", json_object_to_json_string(jsonCgiResp));

    }

// free the memory allocated to the json object ------------------------------------------------------------------------

    json_object_put(jsonCgiResp);
    free(sInstruction);
    return EXIT_SUCCESS;
}

