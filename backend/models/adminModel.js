import db from "../config/database.js";
 
const Admin = db.collection('admins',
{
   username: "",
   email: "",
   age: 0,
   phoneno: 0   
}, {
   freezeTableName: true
});
console.log("collection retrieved!");
 
export default Admin;