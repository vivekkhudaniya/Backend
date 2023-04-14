import express from "express";
import path from "path";
import mongoose from "mongoose";
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName : "Backend",
}).then(() => console.log("database connected"))
.catch((e) => console.log(e));

const messageSchema = new mongoose.Schema({
    username:String,
    email:String,
});

const Messge = mongoose.model("Message",messageSchema);

const users = [];
//using middleware
app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("index",{name : "Vivek"});
});

app.get("/add",async(req,res) =>{
    
    await Messge.create({name:"vivek2",email:"vivekkhudan2iya"}).then(()=>{
        res.send("Nice");
    });
    //res.send("Nice");
})

app.get("/success", (req,res) =>{
    res.render("success");
});

// app.post("/",(req,res) =>{
//     console.log(req.body);
//     users.push({username : req.body.name , email : req.body.email});
//     res.redirect("/success");
// });

app.post("/",(req,res) =>{
    console.log(req.body);
   Messge.create({username:req.body.name , email : req.body.name});
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

