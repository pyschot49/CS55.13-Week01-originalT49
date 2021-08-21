//comment
let myhttp = require("http");

let myserver = myhttp.createServer(
  function(myrequest, myresponse) {
    console.log(myrequest.url);

    let mytext

    if ( myrequest.url ){
       mytext = "Welcome, you are here: " + myrequest.url;
    } else {
       mytext = "You should type something";
    }

    myresponse.writeHead(200, {
      "Content-Type": "text/plain"
    });

    myresponse.end( mytext + "\n");
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("Okay, server started");
