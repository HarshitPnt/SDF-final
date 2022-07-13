import db from "../config/database.js";
 
const Message = db.collection('messages',
{
   from: "",
   to: "",
   subject: "",
   timestamp: "",
   content: "" 
}, {
   freezeTableName: true
});
console.log("Messages collection retrieved!");
 
export default Message;