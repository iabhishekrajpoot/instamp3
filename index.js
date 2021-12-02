
const express = require('express')();
var ffmpeg = require('fluent-ffmpeg');
const app = express;

app.get('/', (re, res) => {
 url = decodeURIComponent(req.query.url);
 res.send("running");
 console.log(url);
});

app.get("/api", async (req, res) => {
  url = decodeURIComponent(req.query.url);

ffmpeg(url)
 .toFormat('mp3')
 .on('end', function() {                    
        console.log('conversion ended');
        })
 .on('error', function(error){
        console.log('error: ' + error.message);
        })
 .pipe(res,{end:true})
  res.attachment('output.mp3');
  res.contentType('audio/mpeg');

});


app.listen(3000,() => console.log("running 3000"));
