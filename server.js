var express = require("express");
var multer  = require('multer');
var app = express();
var upload = multer({ dest: 'uploads/' });

var port = process.env.PORT || 8080;


app.use(express.static(__dirname + "/public")); //server index.html

 
app.post('/get-file-size', upload.single('uploadFile'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were an
  return res.json({ "file-size": req.file.size});
});




//start server
app.listen(port, function () {
console.log('Server listening on port ' + port + '...');
});

