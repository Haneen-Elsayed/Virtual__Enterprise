import mongoose from"mongoose";

const companyschema=new mongoose.Schema({
   name:{
    type:String,
    required:true,
    unique:true,
    trim:true
   },
   description:{
    type:String,
     trim:true
    
   }
    
    
},{timestamps:true})
const companymodel=mongoose.models.company || mongoose.model("company",companyschema);
export default companymodel;