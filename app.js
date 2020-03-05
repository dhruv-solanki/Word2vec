var express = require("express");
var bodyParser = require("body-parser");
var formidable = require("formidable");
var fs = require("fs");

// to run python script with in node js
// const spawn = require("child_process").spawn;
// const pythonProcess = spawn('python', ["python/sample.py"]);

var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var filename = "";

app.get("/", function(req, res) {
    res.redirect("/uwe");
});

app.get("/uwe", function(req, res) {
    var result = "";
    res.render("index", {result});
});

app.post("/uwe", function(req, res) {
    var keyword = req.body.keyword;

    // to run python program in node js
    const {spawn} = require("child_process");
    const python = spawn('python3', ["scripts/sample.py", filename, keyword]);

    python.stdout.on("data", function(data) {
        var result = JSON.parse(data);
        res.render("index", {result, keyword});
    });

    python.stderr.on("data", function(data) {
        var result = data.toString();
        res.render("index", {result, keyword});
    });
});

app.get("/uwe/fileupload", function(req, res) {
    res.render("upload");
});

app.post("/uwe/fileupload", function(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        var oldpath = files.filetoupload.path;
        filename = files.filetoupload.name;
        var newpath = "scripts/data/" + filename;

        fs.rename(oldpath, newpath, function(err) {
            var source = fs.createReadStream(oldpath);
            var dest = fs.createWriteStream(newpath);

            source.pipe(dest);
            source.on("end", function() {
                console.log("File Uploaded Succesfully!");
            });
            source.on("error", function() {
                console.log("File not Uploaded!!!");
            });
        });
    });

    res.redirect("/uwe");
});

app.get("/uwe/info", function(req, res) {
    res.render("info");
}); 

app.get("/uwe/about", function(req, res) {
   res.render("about"); 
});

const ip = "127.0.0.1";
const port = 8000;
app.listen(port, ip, function() {
    console.log("Server is running at ", ip, ":", port);
});