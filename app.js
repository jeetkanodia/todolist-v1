const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.set('view engine' , 'ejs');

app.get('/' , (req,res)=>{
    var today = new Date();
    var day = "";
    var currentDay = today.getDay();
    switch(currentDay)
    {
        case 0: day = "Sunday";break;
        case 1: day = "Monday";break;
        case 2: day = "Tuesday";break;
        case 3: day = "Wednesday";break;
        case 4: day = "Thrusday";break;
        case 5: day = "Friday";break;
        case 6: day = "Saturday";break;
        default: day = "Error Occured"; 
    }
    res.render('list' , {kindOfDay : day})
});

app.listen(3000 , ()=>{
    console.log("Server up on port 3000");
});