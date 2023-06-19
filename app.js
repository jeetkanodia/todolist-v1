const express = require('express')
const bodyParser = require('body-parser');

const app = express(); 

var items = ["Buy Food", "Cook Food" , "Eat Food"]; 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set('view engine' , 'ejs');

app.get('/' , (req,res)=>{
    var today = new Date();
    var options={
        weekday: 'long',
        day: "numeric",
        month: 'long'
    };

    var day = today.toLocaleDateString("en-US", options);
    
    res.render('list' , {kindOfDay : day , newListItems: items})
});

app.post('/' , (req,res)=>{
    var item = req.body.newItem;
    if(item!="")
    items.push(item);
    res.redirect('/');
})


app.listen(3000 , ()=>{
    console.log("Server up on port 3000");
});