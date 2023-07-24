const express=require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended: true}));
app.use('/images', express.static('images'));


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/retry", function(req, res){
    res.sendFile(__dirname+"/retry.html");
});

app.post('/', function(req,res){
    var bus1 = req.body.bus1;
    var bus2 = req.body.bus2;
    var adults = Number(req.body.adults);
    var children = Number(req.body.children);
    var Totalamount;
    if((bus1 ==  "Kpl" && bus2 == "Mys") || (bus1 == "Mys" && bus2 == "Kpl")){
        Totalamount = 400 * (adults + children/2);
    }
    else if ((bus1 == "Kpl" && bus2 == "Ubl") || (bus1 == "Ubl" && bus2 == "Kpl")){
        Totalamount = 150 *(adults + children/2);
    }
    else if((bus1 == "Kpl" && bus2 == "Gvt") || (bus1 == "Gvt" && bus2 == "Kpl")){
        Totalamount = 60 *(adults + children/2);
    }
    else if((bus1 == "Ubl" && bus2 == "Gvt") || (bus1 == "Gvt" && bus2 == "Ubl")){
        Totalamount = 250 *(adults + children/2);
    }
    else if((bus1 == "Mys" && bus2 == "Gvt") || (bus1 == "Gvt" && bus2 == "Mys")){
        Totalamount = 460 *(adults + children/2);
    }
    else if((bus1 == "Ubl" && bus2 == "Mys") || (bus1 == "Mys" && bus2 == "Ubl")){
        Totalamount = 60 *(adults + children/2);
    }
    else{
        res.redirect("/retry");
    
    }

    res.send("Total Price: " +Totalamount);

});

app.listen(3000, function(){
    console.log("Server is runnign on 3000 port.");
});