var express = require('express');

var app = express();

app.param('fileName', function(request, response, next, fileName) {
    console.log("app param executed");
    var basePath = "/home/yufufi/Documents/wiki/todo/";
    var ext = ".taskpaper";
    var taskPaperFile = basePath + fileName + ext;
    var fileContent = fs.readFileSync(taskPaperFile, { encoding: "utf8" });
    if (fileContent === "") {
        console.error("Cannot load the file");
    }
    request.taskpaper = new Parser(fileContent).parse();
    console.log("Setting the taskpaper obj on the request");

    next();
});

app.get('/notes', function(req, res) {
    res.json({notes: "This is your hello world 1"});
});

app.get('/tp/:fileName', function(req, res) {
    console.log("Reqest received");
    var js = JSON.stringify(req.taskpaper, null, 2);
    console.log(js);
    res.json(js);
    console.log("Done with the request");
});

app.listen(3500, function() {
    console.log("We're live!");
    console
});

var fs = require("fs");
var Parser = require("taskpaper-parser").Parser;
 
//var 0taskPaperFile = "~/Documents/wiki/todo/catchall.taskpaper";
