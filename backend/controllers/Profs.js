import Prof from '../models/ProfModel.js'
import Course from '../models/CourseModel.js'
import db from "mongodb"

export const add_course = async (req, res) => {
    try {
    await Prof.updateOne({"_id" : db.ObjectId(req.params.id) }, { $push: {courses: req.params.id} });
    await Course.updateOne({"_id" : db.ObjectId(req.params.id) }, { $push: {profs: req.params.insid} });
    res.json({
        "message": "Course added"
    });
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const getAllProfs = async (req, res) => {
    console.log("getAllProfs called %s", JSON.stringify(req.params));
    try {
        const prfs = await Prof.find().toArray();
        const retprfs = prfs.map(item => ({ id : item._id, username: item.username, email: item.email, expertise: item.expertise, age: item.age, phoneno: item.phoneno, image: item.image, courses: item.courses}));
        res.json(retprfs);
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const getProfById = async (req, res) => {
    console.log("getProById called %s", JSON.stringify(req.params));
    try {
        const prfs = await Prof.find({"_id": db.ObjectId(req.params.id)}).toArray();
        res.json(prfs[0]);
    }
    catch (error) {
     res.json({ message: error.message });
    }
}

export const getCourseByProf = async (req, res) => {
    try{
        const prfs = await Prof.find({"_id": db.ObjectId(req.params.id)}).toArray();
        const name = prfs[0].username;
        const crs = await Course.find({"profs" : { $in : [name]}}).toArray();
        res.json({crs});
    }
    catch (error){
        res.json({message: error.message });
    }
}