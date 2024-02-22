// import th model

const Todo = require("../models/Todo");

///define route handler



exports.createTodo = async (req,res)=> {
    try{
            const{title,description}= req.body;

            ///create new todo obj and insert in db below
            const response = await Todo.create({title,description});
            //send a json response with success flag
            res.status(200).json({
                success:true,
                data:response,
                message:"Entry created successfully"
            });
    }
    catch(err){
                console.log(err);
                res.status(500).json({
                            success:false,
                            data:"Internal Error",
                            message:err.message
                })
    }
}