const express = require("express");
const parser = require("body-parser")
const { getlist , createlist , updatelist , deletelist , ptd} = require("./src/controllers");
const cors = require("cors");
const mongoose = require("mongoose");


//?DB Connect

try{
mongoose.connect("mongodb://localhost:27017/MERN_ST");
}
catch(e){
    console.log("Error");
}
mongoose.connection.on("connected" ,
 ()=>{
    console.log("DB CONNECTED");
});
mongoose.connection.on("error" , ()=>{
    console.log("DB CONNECTEd ERRO");
});

//DB Connect End

const server = express();

server.use(cors());
//middleware(after rquest before processing to controller)

server.use(parser.json());


// server.get("/data",(request,response)=>{
    //     var students=["ayushi","krish","swastik"];
    //     var studentid=request.query.id;
    //     response.send(studentid ? students[studentid] : students);
    
    // });

server.get("/todos", getlist);

server.put("/update-todo" , updatelist);
server.post("/create-new-todos" , createlist);
server.delete("/delete-todo" , deletelist);
server.patch("/patch-todo" , ptd);




server.listen(4000, () => {
    console.log("my server is starting on port 4000T");
});
