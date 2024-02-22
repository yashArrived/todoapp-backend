const Todo = require('../models/Todo');


exports.deleteTodo = async(req,res) => {

    try {
        
        const {id} = req.params;
        await Todo.findByIdAndDelete({_id: id});
             
        res.json({
            success:true,
            
            message:"Entry Deleted successfully",
        })

    } 

    
    
    catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Server Error",
            error:error.message
        });
    }
}

