# -*- makefile -*-
# makefile for mysql-c-library project
# Created: 15-Jun-2021
# Geoffrey Jarman
# Log
#       08-Nov-2021 add bookDetails
#       09-Dec-2021 add bookDelRating
#       10-Dec-2021 add bookDelSeries
#       10-Dec-2021 add bookDetails2
#       20-Sep-2022 add .cgi targets for all source
#       27-Oct-2000 add json4Ajax
# $@ Target file
# $^ Dependency files
# $(CC) Compiler executable
# $(CFLAGS) Compiler options
# $@ Souce file
# $^ Dependent files (dependencies)

# Variables

CC=gcc
CFLAGS=-Wall -g -o
SQL1FLAGS=-I/usr/include/mysql
SQL2FLAGS=-L/usr/lib/x86_64-linux-gnu -lmysqlclient -lpthread -lz -lm -lrt -lssl -lcrypto -ldl -lresolv

all: showText showText.cgi collectText collectText.cgi d_AjaxFetch1 d_AjaxFetch1.cgi d_AjaxFetch2 d_AjaxFetch2.cgi d_ajaxPost  d_ajaxPost.cgi helloWorld helloWorld.cgi multiply multiply.cgi simplest simplest.cgi tcount tcount.cgi setCornerImage setCornerImage.cgi checkAuthentication checkAuthentication.cgi jsontest json4Ajax json4Ajax.cgi

showText: showText.c ../shared/rf50.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

showText.cgi: showText.c ../shared/rf50.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

collectText: collectText.c ../shared/rf50.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

collectText.cgi: collectText.c ../shared/rf50.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

d_AjaxFetch1: d_AjaxFetch1.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

d_AjaxFetch1.cgi: d_AjaxFetch1.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

d_AjaxFetch2: d_AjaxFetch2.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

d_AjaxFetch2.cgi: d_AjaxFetch2.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

d_ajaxPost: d_ajaxPost.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

d_ajaxPost.cgi: d_ajaxPost.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

helloWorld: helloWorld.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

helloWorld.cgi: helloWorld.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

multiply: multiply.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

multiply.cgi: multiply.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

simplest: simplest.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

simplest.cgi: simplest.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

tcount: tcount.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

tcount.cgi: tcount.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

setCornerImage: setCornerImage.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

setCornerImage.cgi: setCornerImage.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

checkAuthentication: checkAuthentication.c
	$(CC) $(CFLAGS) $@ $(SQL1FLAGS) $^ $(SQL2FLAGS) -luuid

checkAuthentication.cgi: checkAuthentication.c
	$(CC) $(CFLAGS) $@ $(SQL1FLAGS) $^ $(SQL2FLAGS) -luuid

jsontest: jsontest.c
	$(CC) $(CFLAGS) $@ $^ -ljson-c

json4Ajax: json4Ajax.c
	$(CC) $(CFLAGS) $@ $^ -ljson-c

json4Ajax.cgi: json4Ajax.c
	$(CC) $(CFLAGS) $@ $^ -ljson-c

clean:
	rm -f *.o *.s *.i showText showText.cgi collectText collectText.cgi d_AjaxFetch1 d_AjaxFetch1.cgi d_AjaxFetch2 d_AjaxFetch2.cgi d_ajaxPost d_ajaxPost.cgi helloWorld helloWorld.cgi multiply multiply.cgi simplest Simplest.cgi tcount tcount.cgi setCornerImage setCornerImage.cgi checkAuthentication checkAuthentication.cgi jsontest json4Ajax json4Ajax.cgi 
