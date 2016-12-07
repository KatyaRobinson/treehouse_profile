function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

printMessage("chalkers", 2000, 20000);

var http = require("http");
var request = http.get("http://teamtreehouse.com/chalkers.json", function(response){
      var responseBody = "";
      response.on("data", function(dataChunk){
      responseBody += dataChunk;
});
    response.on("end", function(){
    console.log(responseBody)
  });
  
});

request.on("error", function(error){
  console.error(error.message);
  
})