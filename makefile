# -*- makefile -*-
# makefile for mysql-c-library project
# Created: 15-Jun-2021
# Geoffrey Jarman
# Log
#       08-Nov-2021 add bookDetails
#       09-Dec-2021 add bookDelRating
#       10-Dec-2021 add bookDelSeries
#       10-Dec-2021 add bookDetails2
# $@ Target file
# $^ Dependency files
# $(CC) Compiler executable
# $(CFLAGS) Compiler options
# $@ Souce file
# $^ Dependent files (dependencies)

# Variables

CC=gcc
CFLAGS=-g -o
#SQL1FLAGS=-I/usr/include/mysql
SQL2FLAGS=-L/usr/lib/x86_64-linux-gnu
#SQL2FLAGS=-L/usr/lib/x86_64-linux-gnu -lmysqlclient -lpthread -lz -lm -lrt -lssl -lcrypto -ldl -lresolv

all: authenticateUser collectText d_AjaxFetch1 d_AjaxFetch2 d_ajaxPost helloWorld multiply simplest setCornerImage

authenticateUser: authenticateUser.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)
#	$(CC) $(CFLAGS) $@ $(SQL1FLAGS) $^ $(SQL2FLAGS)

collectText: collectText.c ../shared/rf50.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

d_AjaxFetch1: d_AjaxFetch1.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

d_AjaxFetch2: d_AjaxFetch2.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

d_ajaxPost: d_ajaxPost.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

helloWorld: helloWorld.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

multiply: multiply.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

simplest: simplest.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

tcount: tcount.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

setCornerImage: setCornerImage.c
	$(CC) $(CFLAGS) $@ $^ $(SQL2FLAGS)

clean:
	rm -f *.o *.s *.i authenticateUser collectText d_AjaxFetch1 d_AjaxFetch2 d_ajaxPost helloWorld multiply simplest setCornerImage
