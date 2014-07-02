var BulkMailSend = require('./BulkMailSend.js');

var sentList = [
    "rishabh.dixit@intelligrape.com",
    "rakesh.kumar@intelligrape.com",
    "mohit.tyagi@intelligrape.com",
    "amit.raj@intelligrape.com",
    "sandeep.kumar@intelligrape.com",
    "kashish.gupta@intelligrape.com"];



//               (emailId, Password, SendTo,Subject,Text,Html)

BulkMailSend.send("guptkashish@gmail.com","##",sentList,"Must See","Waaoo","<h1>Hello World</h1>");