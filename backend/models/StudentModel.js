import db from "../config/database.js";
 
const Student = db.collection('students',
{
   username: "",
   name: "",
   joindate: "",
   image: "",
   email: "",
   age: 0,
   phoneno: 0,
   courses: []
}, {
   freezeTableName: true
});
console.log("student collection retrieved!");
 
export default Student;