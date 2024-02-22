// import th model

const Todo = require("../models/Todo");


exports.getTodo = async (req,res) => {
    try{

            //fetch all todo items from db
            const todos= await Todo.find({});

            //response updated
            res.status(200).json({
                success:true,
                data:todos,
                message:"Entire todo data fetched"
            })
    }





    catch(err){
        console.log(err);
        res.status(500).json({
                    success:false,
                    message:"Server Error",
                    erro:err.message
        })
    }
}


exports.getTodoById = async (req,res) => {
    try{

       const id = req.params.id;
       const todo = await Todo.findById({_id : id})

        //data for the given id is not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No  data found with given id",
            })
        }

        //data found 

       res.status(200).json({
        success:true,
        data:todo,
        message:`The requested ${id} todo data fetched`,
        })
}


catch(err){
    console.log(err);
    res.status(500).json({
                success:false,
                message:"Server Error",
                erro:err.message
    })
}
}

