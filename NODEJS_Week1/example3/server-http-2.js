var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;


var server = http.createServer( function(req, res){

    //request for url
    console.log(req.headers);
    console.log('Request for ' + req.url + ' by method ' + req.method);

    //check method
    if(req.method == 'GET'){
        var fileUrl;

        // if client access service's root
        if(req.url == '/'){
            fileUrl = '/index.html';
        } else{
            fileUrl = req.url;
        }

        var filePath =  path.resolve('./public' + fileUrl );
        var fileExt = path.extname(filePath);

        //we only serve .html for now
        if(fileExt == '.html'){
            fs.exists(filePath, function(exists){

                //check if file exists
            if(!exists){
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<html><body><h1>Error 404: ' + fileUrl +
                    ' not found</h1></body></html>');
                return;
                }

                //serve the file
                res.writeHead(200, {'Content-Type': 'text/html' });
                fs.createReadStream(filePath).pipe(res);

            });
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<html><body><h1>Error 404: ' + fileUrl +
                        ' not an HTML file</h1></body></html>');

        }

    }

    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<html><body><h1>Error 404: ' + req.method +
                    ' method is not supported</h1></body></html>');
    }

});

server.listen(port, hostname, function(){
    console.log('Server running at http://'+hostname+':'+port+'/');
});
