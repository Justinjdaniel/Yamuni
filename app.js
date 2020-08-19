const express = require("express");
const path = require("path");
const cors = require('cors');
const checkAuth = require('./src/middleware/check-auth')
const bodyParser = require('body-parser');
const loginRouter=require('./src/routes/loginRouter')
const app = new express();
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.set("view engine", "html");
app.set("views", "./src/views");
app.use(cors());
const port=process.env.PORT||5000;
app.use('login',loginRouter)
app.get('/',function(req,res){
    res.send('hi');
})
app.listen(port, () => {
    console.log(`Server Listening On Port:${port}`);
});


