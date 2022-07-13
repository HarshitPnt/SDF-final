import Student from '../models/StudentModel.js'
import db from "mongodb"

export const add_course_student = async (req, res) => {
    try {
    await Student.updateOne({"_id" : db.ObjectId(req.params.id) }, { $push: {courses: {name:req.body, marks: 0.0} } });
    res.json({
        "message": "Course added"
    });
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().toArray();
        const retstudents = students.map(item => ({ id : item._id, username: item.username, email: item.email, age: item.age, phoneno: item.phoneno, image: item.image, name: item.name, joindate: item.joindate, courses: item.courses}));
        res.json(retstudents);
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const getStudentById = async (req, res) => {
    console.log("getAllStudents called %s", JSON.stringify(req.params));
    try {
        const students = await Student.find({"_id": db.ObjectId(req.params.id)}).toArray();
        res.json(students[0]);
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}