const express = require("express");
const app = express();
require("dotenv").config();
const Course = require("../Pirma/models/Course");
const { createUser, getAllUsers } = require("./Controlers/userControlers");
console.log(Course);
app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect(`${process.env.MONGO_DB_URL}`)
  .then(() => console.log("Conected!"))
  .catch((error) => console.log(error));

app.post("/api/users", createUser);
app.get("/api/users", getAllUsers);

app.listen(process.env.PORT, () => {
  console.log("Server is tuning on " + process.env.PORT);
});

/////////////////////mongodb//////////////////
// const createRecord = async () => {
//   //irasomi duomenysi db
//   const record = await Course.create({
//     title: "Javascript development",
//     author: "Laurynas",
//     modules: ["Database", "Javascript", "Html", "css"],
//   });
//   console.log(record);
// };
// createRecord();
//////////////Save////////////////
// const saveRecord = async () => {
//   //irasomi duomenysi db
//   const course = new Course({
//     title: "Javascript development",
//     author: "Laurynas",
//     modules: ["Database", "Javascript", "Html", "css"],
//   });
//   const result = await course.save();
//   console.log(result);
// };
// saveRecord();
// const getAllCourses = async () => {
//   const allCourses = await Course.find();
//   console.log(allCourses);
// };
// // getAllCourses();

// const getCustomCourse = async (id) => {
//   const course = await Course.findById(id);
//   console.log(course);
// };
// // getCustomCourse("65b21d241163a333596b61f7");

// const getAuthor = async (myauthor) => {
//   const course = await Course.findOne({ author: myauthor });
//   console.log(course);
// };
// // getAuthor("Laurynas");
// const updateCourse = async (id) => {
//   const course = await Course.findById(id);

//   if (!course) {
//     return;
//   }
//   course.modules.push("TypeScript");

//   const result = await course.save();
//   console.log(result);
// };
// // updateCourse("65b21d7195bac188c5f8cfc8");
// const deleteOne = async (id) => {
//   const course = await Course.deleteOne({ _id: id });
//   console.log(course);
// };
// // deleteOne("65b21d7195bac188c5f8cfc8");

// const deleteMany = async (myauthor) => {
//   const course = await Course.deleteMany({ author: myauthor });
//   console.log(course);
// };
// deleteMany("Laurynas");
////////////////////end of mongodb////////////
