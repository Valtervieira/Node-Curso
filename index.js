var http = require('http');
fs = require('fs');

function serveStaticFile(res,  path, contentType, responseCode){
	
	if(!responseCode) responseCode = 200;
	fs.readFile(__dirname + path, function(err, data){
				
		if(err){
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end('500 - internal error');
		} else {
			
			res.writeHead(responseCode,
				{'Content-Type' : contentType});
			res.end(data);
		}	
	});

}

	
http.createServer(function(req,res){//requisição e resposta	

var path = req.url.replace(/\/?(?:\?.*)$/, '').toLowerCase();
	
	switch(path){
			
		case '/besta':
			serveStaticFile(res, '/public/404.html','text/html');
		break;

		case '/public/css/index.css':
			serveStaticFile(res, '/public/css/index.css','text/css');
		break;

		case '/public/teste.png':
			serveStaticFile(res, '/public/teste.png','image/png');
		break;

		case '/world':
			serveStaticFile(res, '/public/world.html','text/html')
		break;


		case '/contact':
			serveStaticFile(res, '/public/contact.html','text.html');
		break;
				
		case '/about':
			serveStaticFile(res, '/public/about.html','text.html');
		break;
				
		default:
			serveStaticFile(res, '/public/home.html','text.html');
		break;
			
	}
		
}).listen(3000); //subindo servidor na porta 3000

console.log('Server started on localhost:3000; press Ctrl-c to terminate...'); //resposta no prompt para indicar início de servidor.
