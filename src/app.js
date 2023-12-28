const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app= express();
const port = 8000;


//PUBLIC STATIC PATH
const staticpath =(path.join(__dirname,"../public"));
const template_path =(path.join(__dirname,"../templets/views"));
const partials_path =(path.join(__dirname,"../templets/partials"));

app.set("view engine", "hbs");
app.set("views",template_path)
hbs.registerPartials(partials_path);


app.use(express.static(staticpath));


   // ROUTING 

   
app.get("/",(req,res)=>{
    res.render('index');

});

app.get("/about",(req,res)=>{
    res.render('about');

});
app.get("/weather",(req,res)=>{
    res.render('weather');

});

app.get("*", (req,res)=>{
    res.render('404error',{
        //   errormege: 'opps page note found'
    });

});




app.listen(port, () => {
   console.log(`listening to the post number${port}`);
});