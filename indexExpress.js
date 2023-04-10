import express from "express";
import path from "path";
import mongoose from "mongoose";
const router = express.Router();


mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName : "backend",
}).then(() => console.log("database connected"))
.catch((e) => console.log(e));

const app = express();

const users = [];
//using middleware
//app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");

// app.get("/",(req,res)=>{
//     res.render("./index.ejs",{name : "Vivek"});
// });
router.get('/', function(req, res) {
    res.render('index');
  });
  
app.get('/add', (req, res) => {
    const myString = 'Hello World';
    res.send(myString);
  });

app.post("/contact",(req,res) =>{
    console.log(req.body);
    users.push({username : req.body.name , email : req.body.email});
    res.redirect("/success");
});

app.get("/users",(req,res) =>{
    res.json({
        users,
    });
})

// app.get("/getProducts",(req,res)=>{
//     //res.sendStatus(400) It helps to send the status
//     // res.json({
//     //     success:true,
//     //     products:[]
//     // })
//     const pathLocation = path.resolve();
//     res.sendFile(path.join(pathLocation,"./index.html"));
//     // res.status(400).send("Meri Marzi")
// })

const server = app.listen(5000,() =>{
    console.log("Server is working")
})