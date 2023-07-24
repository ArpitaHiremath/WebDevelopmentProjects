const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    // var today = new Date();
    // var currentDay = today.getDay();
    // var day = "";
    var day = req.body.Days;

    // if(currentDay == 0){
    //     day = "sunday";
    // } else if(currentDay == 1){
    //     day = "Monday";
    // } else if(currentDay == 2){
    //     day = "Tuseday";
    // } else if(currentDay == 3){
    //     day = "Wednesday";
    // }else if(currentDay == 4){
    //     day = "Thurseday";
    // }else if(currentDay == 5){
    //     day = "Friday";
    // }else {
    //     day = "saturday";
    // }

    res.render('list', {kindofDay: day});

});  

    app.listen(3000, function(){
        console.log("Server started on port 3000");
    });
