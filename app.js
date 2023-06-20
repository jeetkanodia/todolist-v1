const express = require('express')
const bodyParser = require('body-parser');

const app = express(); 

var workItems = [];
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
    
    res.render('list' , {listTitle : day , newListItems: items})
});

app.post('/' , (req,res)=>{
    
    var item = req.body.newItem;
    if(req.body.list === "Work")
    {
        workItems.push(item);
        res.redirect('/work')
    }
    else{
        if(item!="")
        items.push(item);
        res.redirect('/');
    }
    
})


app.get('/work' , (req,res)=>{
    res.render('list' , {listTitle : "Work List" , newListItems: workItems})
})

app.post('/work' , (req,res)=>{
    var item = req.body.newItem;
    if(item!="")
    workItems.push(item);
    res.redirect('/work');
})

app.listen(3000 , ()=>{
    console.log("Server up on port 3000");
});