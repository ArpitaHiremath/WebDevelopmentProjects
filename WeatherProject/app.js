const express = require("express");
const bodyParser = require('body-parser');
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({extended:  true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req,res){
    const query = req.body.cityName;
    const apiKey = "198827a2126c4766b6d162051231407";
    const url = "https://api.weatherapi.com/v1/current.json?q= " + query + " &key= " + apiKey ;
    https.get(url, function(response){

    response.on("data", function(data){
        const weather = JSON.parse(data);
        const location = weather.location.name;
        const weathercondition = weather.current.condition.text;
        const weatherImage = weather.current.condition.icon;
        console.log(weathercondition);
        res.write("<h1>The weather condition in " + location + " is " + weathercondition + " </h1>");
        res.write("<img src=https:"+weatherImage+">");
        res.send();
     });
    });
});




app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});


//https://api.weatherapi.com/v1/current.json?q=Koppal&key=198827a2126c4766b6d162051231407
