import mongoose from "mongoose";

const projectsschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: { 
    type: String,
    trim: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company", // تأكدي إنها مطابقة لاسم موديل الشركة عندك
    required: true,
  },
  departmentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Department", 
    required: true, 
  },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, 
  },
  startDate: { 
    type: Date, 
  },
  endDate: { 
    type: Date, 
  },
}, { timestamps: true });

const projectsmodel = mongoose.models.Project || mongoose.model("Project", projectsschema);
export default projectsmodel;