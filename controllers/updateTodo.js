const Todo = require("../models/Todo");

///define route handler



exports.updateTodo = async (req,res)=> {
    try{
            const {id} = req.params; //OR ::const id=req.params.id

            const {title , description} = req.body;

            const todo = await Todo.findByIdAndUpdate(
                {_id:id},
                {title , description , updatedAt: Date.now()},
            )
            //send a json response with success flag
            res.status(200).json({
                success:true,
                data:todo,
                message:"Entry updated successfully"
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