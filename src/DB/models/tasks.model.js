import mongoose from"mongoose";

const tasksschema=new mongoose.Schema({
   title: {
     type: String,
         required: true, 
         trim: true, },

 description: {
          type: String,
         trim: true, },

 projectId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Projects", required: true, },
 assignedTo: { 
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
          required: true, },
createdBy: { 
            type: mongoose.Schema.Types.ObjectId,
             ref: "User", required: true, },

 status: {
                 type: String, enum: ["To Do", "In Progress", "Done"],
                 default: "To Do", },
priority: {
                     type: String,
                     enum: ["Low", "Medium", "High", "Critical"],
                      default: "Medium", }, 
dueDate: { 
        type: Date,
         required: true, },
 completedAt: { type: Date },
    
},{timestamps:true})
const tasksmodel=mongoose.models.tasks || mongoose.model("tasks",tasksschema);
export default tasksmodel;