// jsontest.c -- parsing exercise of JSON file text.json in C using the json-c library
// author     -- Geoffrey Jarman
// started    -- 07-Sep-2022
// references:
//    https://www.youtube.com/watch?v=dQyXuFWylm4&t=8s -- How to Parse JSON in C
//    https://github.com/json-c/json-c -- json-c on github
// log:
//    07-Sep-2022 -- started

#include <stdio.h>
#include <stdlib.h>
#include <json-c/json.h>

int main(int argc, char *argv[]) {

    FILE *fp;
    char buffer[1024];
    char *strProgName = argv[0] + 2;

    struct json_object *parsed_json;
    struct json_object *name;
    struct json_object *age;
    struct json_object *siblings;

    struct json_object *sibling;

    size_t n_siblings;                                         // size of the friends array
    size_t i;                                                  // counter

    if ((fp = fopen("test.json", "r")) == NULL) {
        return EXIT_FAILURE;
    }
    fread(buffer, 1024, 1, fp);
    fclose(fp);

    system("clear");
    printf("%s -- Parsing exercise of JSON file in C using json-c library", strProgName);
    printf("\n\n");

    printf("1. Contents of json file test.json\n\n");
    printf("%s\n", buffer);

    parsed_json = json_tokener_parse(buffer);

    json_object_object_get_ex(parsed_json, "name", &name);
    json_object_object_get_ex(parsed_json, "age", &age);
    json_object_object_get_ex(parsed_json, "siblings", &siblings);

    printf("2. Parsed contents of json file test.json\n\n");
    printf("Name: %s\n", json_object_get_string(name));
    printf("Age: %d\n", json_object_get_int(age));

    n_siblings = json_object_array_length(siblings);
    printf("Siblings (%lu):\n", n_siblings);

    for (i = 0; i < n_siblings; i++) {
        sibling = json_object_array_get_idx(siblings, i);
        printf("%lu. %s\n", i + 1, json_object_get_string(sibling));
    }

    printf("\n");
    json_object_put(parsed_json);
    return EXIT_SUCCESS;
}
