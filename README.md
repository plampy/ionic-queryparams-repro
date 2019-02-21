# Repro for ionic query params behavior

View /home _first_, follow link to /second, follow either link to /home with query param. Query params displayed on home remain empty, and no console.log from subscription.

View /second _first_, follow either link to /home with query params. Query params are displayed as expected for either link, and log messages from observing changes are present. 
