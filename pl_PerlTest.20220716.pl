#!/usr/bin/perl
print("Set-Cookie: cookie1=18afes7a7\n");
print("Set-Cookie: cookie2=28afes7a8; Domain=risingfast.com\n");
print("Set-Cookie: cookie3=38afes7a9; Max-Age=60\n");
print "Content-Type: text/html\n\n";

print("Three cookies have been created\n\n"):
print("cookie1 38aljhfes7a8 -- a session cookie that will die with the current browser session\n");
print("cookie2 219ffwef9w0f -- a session cookie in the domain risingfast.com\n");
print("cookie3 4d8jdwws8q0k -- a non-session cookie with a 60 second lifetime\n\n");
print("View these cookies in Chrome or Edge with navigation:\n");
print("    F12 > Application (top menu) > Cookies (left menu) > (click on domain name\n\n")
print ("This text is provided by a Perl server script /usr/lib/cgi-bin/pl_PerlTest.pl");
