const   http        = require('http');  
const   url         = require('url');  
const   fs          = require('fs');

http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;

    switch (path) {
        case '/':
            fs.readFile("./en/index.html", function(error, data) {  
            if (error) {  
                response.writeHead(404);  
                response.write(error);  
                response.end();  
            } else {
                response.writeHead(200, {  
                    'Content-Type': 'text/html'  
                });  
                response.write(data);  
                response.end(); 
            }  
        });  
        break;
        case '/en/':
            fs.readFile("./en/index.html", function(error, data) {  
            if (error) {  
                response.writeHead(404);  
                response.write(error);  
                response.end();  
            } else {
                response.writeHead(200, {  
                    'Content-Type': 'text/html'  
                });  
                response.write(data);  
                response.end(); 
            }  
        });  
        break;
        case '/fr/':  
            fs.readFile("./fr/index.html", function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end(); 
                }  
            });  
        break
        case '/css/style.css':
            fs.readFile(`./${path}`, function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/css'
                    });
                    response.write(data);
                    response.end();
                }
            });
        break;
        case '/js/index.js':
            fs.readFile(`./${path}`, function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/css'
                    });
                    response.write(data);
                    response.end();
                }
            });
        break;
        default:  
        response.writeHead(404, {  
            'Content-Type': 'text/html'  
        });  
        response.write('<html><head><meta charset="UTF-8"></head><body style="font-family: Arial, Helvetica, sans-serif;"><svg enable-background="new 0 0 32 32" height="128px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Error_x2C__lost_x2C__no_page_x2C__not_found"><g><g><g><circle cx="7.5" cy="5.5" fill="#263238" r="0.5"/><circle cx="5.5" cy="5.5" fill="#263238" r="0.5"/><circle cx="3.5" cy="5.5" fill="#263238" r="0.5"/><path d="M30.5,8h-29C1.224,8,1,7.776,1,7.5S1.224,7,1.5,7h29C30.776,7,31,7.224,31,7.5S30.776,8,30.5,8z" fill="#263238"/><path d="M29.5,29h-27C1.673,29,1,28.327,1,27.5v-23C1,3.673,1.673,3,2.5,3h27C30.327,3,31,3.673,31,4.5v23      C31,28.327,30.327,29,29.5,29z M2.5,4C2.224,4,2,4.225,2,4.5v23C2,27.775,2.224,28,2.5,28h27c0.276,0,0.5-0.225,0.5-0.5v-23      C30,4.225,29.776,4,29.5,4H2.5z" fill="#263238"/></g></g></g><g><path d="M24.5,24c-0.276,0-0.5-0.224-0.5-0.5V21h-3.5c-0.163,0-0.315-0.079-0.409-0.212s-0.117-0.303-0.062-0.456    l2.5-7C22.6,13.133,22.789,13,23,13h1.5c0.276,0,0.5,0.224,0.5,0.5V20h0.5c0.276,0,0.5,0.224,0.5,0.5S25.776,21,25.5,21H25v2.5    C25,23.776,24.776,24,24.5,24z M21.209,20H24v-6h-0.647L21.209,20z" fill="#263238"/><path d="M10.5,24c-0.276,0-0.5-0.224-0.5-0.5V21H6.5c-0.163,0-0.315-0.079-0.409-0.212s-0.117-0.303-0.062-0.456    l2.5-7C8.6,13.133,8.789,13,9,13h1.5c0.276,0,0.5,0.224,0.5,0.5V20h0.5c0.276,0,0.5,0.224,0.5,0.5S11.776,21,11.5,21H11v2.5    C11,23.776,10.776,24,10.5,24z M7.209,20H10v-6H9.353L7.209,20z" fill="#263238"/><path d="M17.5,24h-3c-0.827,0-1.5-0.673-1.5-1.5v-8c0-0.827,0.673-1.5,1.5-1.5h3c0.827,0,1.5,0.673,1.5,1.5v8    C19,23.327,18.327,24,17.5,24z M14.5,14c-0.276,0-0.5,0.225-0.5,0.5v8c0,0.275,0.224,0.5,0.5,0.5h3c0.276,0,0.5-0.225,0.5-0.5v-8    c0-0.275-0.224-0.5-0.5-0.5H14.5z" fill="#263238"/></g></g></svg><h3>Oups cette page n&#39existe pas...</h3><a href="/">Page principale</a></body></html>');  
        response.end();
        break;  
    }

}).listen(8080);
console.log('Serveur work on http://localhost:8080')