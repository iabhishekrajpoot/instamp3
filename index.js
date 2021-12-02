
const express = require('express')();
var ffmpeg = require('fluent-ffmpeg');
const app = express;

/**

 *    input - string, path of input file

 *    output - string, path of output file

 *    callback - function, node-style callback fn (error, result)        

 */

app.get('/', (req, res)=>{
res.send("running");
});

app.get("/api", async (req, res) => {
res.attachment('output.mp3');
  res.contentType('audio/mp3');
  url = req.query.url;
ffmpeg(url)

        .toFormat('mp3')

        .on('end', function() {                    

            console.log('conversion ended');

        

        })
.on('error', function(error){

           console.log('error: ' + error.message);

          


        .pipe(res,{end:true})
});


app.listen(3000,() => console.log("running 3000"));
