var http = require('http');
http.createServer(function (req,res){
res.write("Hi Everyone , this is Valeska Rosario from TEIT B ");
res.end();
}).listen(3000);