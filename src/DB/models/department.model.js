import mongoose from"mongoose";

const departmentschema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    company_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"company"
    },
    description:{
        type:String,
       trim:true,
    },
    
    
},{timestamps:true})

const departmentmodel = mongoose.models.department || mongoose.model("department", departmentschema);
export default departmentmodel; 