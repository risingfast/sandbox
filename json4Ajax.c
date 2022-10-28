// json4Ajax.c -- test program to create cgi to return a json file
// author     -- Geoffrey Jarman
// started    -- 27-Oct-2022
// references:
//    https://www.youtube.com/watch?v=dQyXuFWylm4&t=8s -- How to Parse JSON in C
//    https://github.com/json-c/json-c -- json-c on github
//    https://linuxprograms.wordpress.com/2010/08/19/json_object_new_object/
// log:
//    07-Sep-2022 -- started

#include <stdio.h>
#include <stdlib.h>
#include <json-c/json.h>

int main() {

// create a json object

    json_object *jsonCgiResp = json_object_new_object();

// create json strings to add

    json_object *jsonStatus = json_object_new_string("Error");
    json_object *jsonErrorMessage = json_object_new_string("No matching record");
    json_object *jsonResult = json_object_new_string("");

// build the json object

    json_object_object_add(jsonCgiResp, "Status", jsonStatus);
    json_object_object_add(jsonCgiResp, "Error Message", jsonErrorMessage);
    json_object_object_add(jsonCgiResp, "Result", jsonResult);

// print the json object

    printf("%s\n", json_object_to_json_string(jsonCgiResp));

// free the memory allocated to the json object

    json_object_put(jsonCgiResp);

    return EXIT_SUCCESS;
}
