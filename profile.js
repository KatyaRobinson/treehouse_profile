var http = require("https");

//Print out message
function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

// Print error message
function printError(error){
  console.error(error.message);
}


function get(username){
var request = http.get("https://teamtreehouse.com/" + username + ".json", function(response){
    
 var responseBody = "";
      response.on("data", function(dataChunk){
      responseBody += dataChunk;
});
    response.on("end", function(){
      if(response.statusCode ===200){
      try {
    var profile = JSON.parse(responseBody);
    printMessage(username, profile.badges.length, profile.points.JavaScript);
      }
      catch(error) {
        //Parse error
        printError(error);
        }
      } else {
        //Status code error
        printError({message: "There was an error getting a profile for " + username + ". "});
      }
      
  });
  
});
// Connection error
request.on("error", printError);
}


module.exports.get = get;