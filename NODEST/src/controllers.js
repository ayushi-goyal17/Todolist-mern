const { response } = require("express");
const {list} = require("./models");


 
const getlist = async (request , response)=> {
    var tdid = request.query.id;//student is a string if u put string here u will have to write in url;
    if(id){
        var allTd = await Todo.findById(id);
    }
    else{
        var allTd = await Todo.find();
    }

    
    return response.json(allTd);
};

const createlist =async (request, response) => {
    console.log(request.body);
    await list.create(request.body); 
    return response.json({ status: "TodoList  Created" });
};


const deletelist = async (request , response) =>{
    var _id = request.query._id;
    
    console.log(_id);
    await list.findByIdAndDelete(_id);

    return response.json({status: "Todo Deleted"});
};

const updatelist=async (request , response) =>{
    
    var id = request.query._id;
    var data = request.body;
    console.log(id , data);
    await list.findByIdAndUpdate(id , data);

    return response.json({status: "TodoList Updated"});
};


const ptd =async (request , response) =>{
    // await Student.updateOne(request.body);
    var _id = request.query._id;
    var data = request.body;
    console.log(_id , data);
    await list.findByIdAndUpdate(_id , data);

    return response.json({status: "Todo Patched"});
};


module.exports = { getlist , createlist , updatelist , deletelist , ptd};


