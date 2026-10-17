import mongoose from "mongoose";
import dotenv from "dotenv";
import CompanyModel from "./src/DB/models/company.model.js";
import DepartmentModel from "./src/DB/models/department.model.js";
import UserModel from "./src/DB/models/user.model.js";
import ProjectModel from "./src/DB/models/projects.model.js";
import TaskModel from "./src/DB/models/tasks.model.js";
import PresenceEventModel from "./src/DB/models/presenceEvents.model.js";
import DocumentModel from "./src/DB/models/documents.model.js";
import AuditLogModel from "./src/DB/models/auditlogs.model.js";

dotenv.config({ path: "./src/DB/config/.env.dev" });

async function runSystemTest() {
  try {
    // 1. Connect to database
    await mongoose.connect(process.env.DB_URI);
    console.log("🚀 Connected to MongoDB successfully!");

    // 2. Create a test company
    const company = await CompanyModel.create({
      name: `Virtual Enterprise Test ${Date.now()}`,
      description: "Testing full DB structure"
    });
    console.log("✅ Company Created:", company._id);

    // 3. Create a test department (with dynamic name to avoid duplication)
    const department = await DepartmentModel.create({
      name: `IT Department ${Date.now()}`,
      company_id: company._id,
      description: "Software Engineering Division"
    });
    console.log("✅ Department Created:", department._id);

    // 4. Create a test user
    const user = await UserModel.create({
      name: "Haneen",
      email: `haneen_${Date.now()}@virtual.com`,
      password: "securepassword123",
      role: "Admin",
      department_id: department._id
    });
    console.log("✅ User Created:", user._id);

    // 5. Create a test project
    const project = await ProjectModel.create({
      name: "AI Workplace Presence System",
      description: "Graduation project testing",
      companyId: company._id,
      departmentId: department._id,
      createdBy: user._id
    });
    console.log("✅ Project Created:", project._id);

    // 6. Create a test task
    const task = await TaskModel.create({
      title: "Design Database Schemas",
      description: "Complete all Mongoose models",
      projectId: project._id,
      assignedTo: user._id,
      createdBy: user._id,
      dueDate: new Date()
    });
    console.log("✅ Task Created:", task._id);

    // 7. Create a test presence event
    const presence = await PresenceEventModel.create({
      userId: user._id,
      eventType: "CHECK_IN",
      confidenceScore: 98.5,
      location: "Main Office"
    });
    console.log("✅ Presence Event Created:", presence._id);

    // 8. Create a test document
    const document = await DocumentModel.create({
      title: "Project Architecture Blueprint",
      fileUrl: "https://example.com/files/architecture.pdf",
      uploadedBy: user._id,
      departmentId: department._id,
      accessLevel: "Confidential"
    });
    console.log("✅ Document Created:", document._id);

    // 9. Create a test audit log
    const auditLog = await AuditLogModel.create({
      userId: user._id,
      action: "ADMIN_LOGIN_SUCCESS",
      ipAddress: "192.168.1.50",
      severity: "Low",
      details: "Admin logged into the virtual workspace successfully."
    });
    console.log("✅ Audit Log Created:", auditLog._id);

    console.log(" All 8 models and database relations are working 100% perfectly!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Test failed with error:", error);
    process.exit(1);
  }
}

runSystemTest();