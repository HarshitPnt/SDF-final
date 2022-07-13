import db from "../config/database.js";
 
const Course = db.collection('courses',
{
   name : "",
   is_active:0,
   start_date: "",
   end_date: "",
   profs:[""]
}, {
   freezeTableName: true
});
console.log("course collection retrieved!");
 
export default Course;