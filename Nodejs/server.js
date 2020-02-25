const http= require('http');
http.createServer(function(req,res){
    //
   // response.setHeader( Refreshrate'Content-Type', 'application/json');
    res.setHeader('300',{'Content-type':'text/plain'})
    res.end("<h1>HELLO WORLD</h1>")

}).listen(500);
console.log("sserver is running on 500");
