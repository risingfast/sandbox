#!/usr/bin/perl

# ---------------------------------------------------------------------------------------------------
# pl_PerlTest.pl -- perl script to set cookies in the HTML header of the calling ajax request 
# References:
#    https://www.youtube.com/watch?v=uXDnS5PcjCA&t=18s
#    https://alvinalexander.com/perl/edu/articles/pl010012/
#    https://www.easy400.net/cgidev2o/exhibiu8.htm 
#    developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
# Log:
#    16-Jul-2022 - started
#    16-Jul-2022 - add an HttpOnly cookie as cookie4
#
# ---------------------------------------------------------------------------------------------------

print "Set-Cookie: cookie1=18afes7a7\n" ;
print "Set-Cookie: cookie2=28afes7a8; Domain=risingfast.com\n" ;
print "Set-Cookie: cookie3=38afes7a9; Max-Age=60\n" ;
print "Set-Cookie: cookie4=48afes710; HttpOnly\n" ;
print "Content-Type: text/html\n\n";

print "Four cookies have been created\n\n";
print "cookie1 18afes7a7 -- a session cookie that will die with the current browser session\n";
print "cookie2 28afes7a8 -- a session cookie in the domain risingfast.com\n";
print "cookie3 38afes7a9 -- a non-session cookie with a 60 second lifetime\n";
print "cookie4 48afes710 -- an HttpOnly cookie accessible from the server only\n\n";
print "View these cookies in Chrome or Edge with navigation:\n";
print "    F12 > Application (top menu) > Cookies (left menu) > (click on domain name\n\n";
print "This text is provided by a Perl server script /usr/lib/cgi-bin/pl_PerlTest.pl\n\n";

# Print all environment variables to confirm cookies in HTTP_COOKIE environment variable

print "Environment Variables (look for HTTP_COOKIE):\n\n";
foreach $key (sort keys(%ENV)) {
  print "$key = $ENV{$key}\n";
}
print "\n";
