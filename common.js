
// The following examples demonstrate all three options.
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
local whatTheFuck = function(args, context) {
    log.info("This is a log statement!");
    log.debug("This is a debug statement.");
    log.error("This is... an error statement?");
    // the last parameter indicates we want logging on errors
    http.request('https://httpbin.org/status/404', 'post', '', 'text/plain', null, true);
};
