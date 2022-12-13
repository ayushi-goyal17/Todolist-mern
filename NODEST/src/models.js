const mongoose = require("mongoose");

const todo_Schema = new mongoose.Schema({
    createlist:String , 
    descibeinwords:String,
    iscompleted:Boolean
});

const Todo = mongoose.model("Todo" , todo_Schema);


module.exports=  { Todo }; 