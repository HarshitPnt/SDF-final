import db from "../config/database.js";
 
const Quiz = db.collection('Quiz',
{
   course : "",
   question : "",
   option1: "",
   option2: "",
   option3: "",
   option4: "",
   correct_option: 0
}, {
   freezeTableName: true
});
console.log("collection retrieved!");
 
export default Quiz;