import express from "express";
import path from "path";

const app = express();

const users = [];
//using middleware
//app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("index.ejs",{name : "Vivek"});
});

app.get("/success", (req,res) =>{
    res.render("success.ejs");
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