var express = require('express');

var app = express();

app.get('/notes', function(req, res) {
    res.json({notes: "This is your hello world"});
});

app.listen(3000, () => {
    console.log("We're live!");
});

var fs = require("fs");
var Parser = require("taskpaper-parser").Parser;
 
//var 0taskPaperFile = "~/Documents/wiki/todo/catchall.taskpaper";
var taskPaperFile = "/Users/yufufi/Documents/wiki/todo/catchall.taskpaper";
 
fs.readFile(taskPaperFile, { encoding: "utf8" }, function(error, data) {
    if (error) {
        console.error(error);
    }
    else {
        var parsedContent = new Parser(data).parse();
        console.log(parsedContent.serialize());
        console.log("test");
        console.log(JSON.stringify(parsedContent, null, 2));
    }
});
