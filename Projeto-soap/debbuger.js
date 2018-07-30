var http = require('http');
fs = require('fs');

http.createServer(function(req,res){

global.x = 5;
setTimeout(() =>{
	debugger;
	console.log('world');
}, 1000);
console.log('Hello'); 

}).listen(3000);
 
