import express from "express";
import path from "path";

const app = express();



app.get("/getProducts",(req,res)=>{
    //res.sendStatus(400) It helps to send the status
    // res.json({
    //     success:true,
    //     products:[]
    // })
    const pathLocation = path.resolve();
    res.sendFile(path.join(pathLocation,"./index.html"));
    // res.status(400).send("Meri Marzi")
})

const server = app.listen(5000,() =>{
    console.log("Server is working")
})