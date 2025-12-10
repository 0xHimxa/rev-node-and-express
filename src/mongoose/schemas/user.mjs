import mongoose from "mongoose";


//because this is not type script we will have to do it the hard way


const userSchema = new mongoose.Schema({

    username:{type:mongoose.Schema.Types.String,
        
        required:true,
        //this uinque means if we try to add user with same username it will through error
        unique:true
        
    },

    password:{type:mongoose.Schema.Types.String,
        
        required:true,
    
        
    },
})

// then  dis step create a model then name it that is what we going to be using


export const User = mongoose.model('User',userSchema);

