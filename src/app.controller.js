import connectDB from "./DB/connection.js";

const bootstrap = async (app, express) => {
  // قراءة بيانات الـ JSON
  app.use(express.json());

  // الاتصال بقاعدة البيانات
  await connectDB();

  // الراوت الأساسي للتجربة
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Virtual Enterprise API!" });
  });

  // معالجة الروابط غير الخاطئة
 app.use('{*splat}', (req, res) => {
  res.status(404).json({ message: "In-valid endpoint" });
});
};

export default bootstrap;