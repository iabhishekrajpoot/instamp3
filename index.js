var ffmpeg = require('fluent-ffmpeg');
const express = require('express');
const app = express;

/**

 *    input - string, path of input file

 *    output - string, path of output file

 *    callback - function, node-style callback fn (error, result)        

 */



app.get("/", async (req,res) => {
  url = req.query.url;
ffmpeg(url)

        .toformat('mp3')

        .on('end', function() {                    

            console.log('conversion ended');

            callback(null);

        }).on('error', function(err){

            console.log('error: ', e.code, e.msg);

            callback(err);

        })
        .pipe(res,{end:true});

});
app.listen(3000,() => console.log("running 3000"));
