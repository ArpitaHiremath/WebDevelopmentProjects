const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended: true}));


app.get('/', function(req,res){
   res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req,res){
    var km = Number(req.body.km);
    var passenger = Number(req.body.passenger);
    var ticketamt = parseFloat(3*km*passenger);
    res.send("Ticket Price: " +ticketamt);
});

 


app.listen(3000, function(){
    console.log("sever is running on 3000 port.");
});