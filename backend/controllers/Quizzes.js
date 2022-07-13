import Quiz from "../models/quizModel.js";
import db from "mongodb";

export const create_quiz = async (req, res) =>{
    try{
        await Quiz.insertOne({
            "course" : db.ObjectId(req.params.id),
            "question" : req.body.question,
            "option1": req.body.option1,
            "option2": req.body.option2,
            "option3": req.body.option3,
            "option4": req.body.option4,
            "correct_option": req.correct_option
        })
        res.json({"message": "quiz created successfully"});
    }
    catch(error){
        res.json({message: error.message});
    }
}

export const get_quiz = async (req, res) =>{
    try{
        const quiz = await Quiz.find({ 
            "course" : db.ObjectId(req.params.id)
        })
        res.json({quiz});
    }
    catch(error){
        res.json({message: error.message})
    }
}