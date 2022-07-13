import db from "../config/database.js";
 
const Detail = db.collection('details',
{
   email: "",
   password: ""
}, {
   freezeTableName: true
});
console.log("collection retrieved!");
 
export default Detail;