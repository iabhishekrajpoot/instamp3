var ffmpeg = require('fluent-ffmpeg');

/**

 *    input - string, path of input file

 *    output - string, path of output file

 *    callback - function, node-style callback fn (error, result)        

 */

function convert(input, output, callback) {

    ffmpeg(input)

        .output(output)

        .on('end', function() {                    

            console.log('conversion ended');

            callback(null);

        }).on('error', function(err){

            console.log('error: ', e.code, e.msg);

            callback(err);

        }).run();

}

convert('https://www.statuslagao.com/whatsapp/videos/new/new-whatsapp-status-video-784.mp4', './output.mp3', function(err){

   if(!err) {

       console.log('conversion complete');

       //...

   }

});
