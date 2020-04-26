const express = require("express");
const app = express();
const bodyParser = require("body-parser");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




app.get("/blockchain", (req, res) => {

});

app.post("/transaction", (req, res) => {
    
});

app.get("/mine", (req, res) => {

});



app.listen(3000, ()=>{
    console.log("listening on port 3000");
});