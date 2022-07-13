import db from "../config/database.js";
 
const Prof = db.collection('Professors',
{
   username: "",
   email: "",
   expertise: "",
   age: 0.0,
   phoneno: 0,
   image: "",
   courses: [""]
}, {
   freezeTableName: true
});
console.log("collection retrieved!");
 
export default Prof;