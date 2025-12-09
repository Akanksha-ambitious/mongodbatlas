const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
     'mongodb+srv://akankshabhagat54_db_user:jZJR83W3AiLare3l@cluster0.vlhtzlg.mongodb.net/?appName=Cluster0'
    );
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Error:", error);
  }
};
 module.exports = connectDB;