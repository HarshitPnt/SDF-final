import Course from '../models/CourseModel.js';
import Prof from '../models/ProfModel.js';
import Student from '../models/StudentModel.js';
import db from "mongodb";

export const getAllCourses = async (req, res) => {
    console.log("getAllCourses called %s", JSON.stringify(req.params));
    try {
        const crs = await Course.find().toArray();
        const retcrs = crs.map(item => ({ id : item._id, profs: item.profs, is_active: item.is_active, start_date: item.start_date, end_date: item.end_date}));
        res.json(retcrs);
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const getCourseById = async (req, res) => {
    console.log("getcoursebyId called %s", JSON.stringify(req.params));
    try {
        const crs = await Course.find({"_id": db.ObjectId(req.params.id)}).toArray();
        res.json(crs[0]);
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const Make_active = async (req, res) => {
    console.log("make_active called %s", JSON.stringify(req.params));
    try {
        await Course.updateOne({"_id": db.ObjectId(req.params.id)} , {$set: {"is_active" : 1} } );
        res.json({"message" : "now course is active"});
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const Make_inactive = async (req, res) => {
    console.log("make_inactive called %s", JSON.stringify(req.params));
    try {
        await Course.updateOne({"_id": db.ObjectId(req.params.id)} , {$set: {"is_active" : 0} } );
        res.json({"message" : "now course is inactive"});
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const getProfsbycourse = async (req, res) => {
    console.log("make_inactive called %s", JSON.stringify(req.params));
    try {
        const prfs = await Course.findOne({"_id": db.ObjectId(req.params.id)}).toArray();
        const retprfs = prfs.map(item => ({ id : item._id, profs: item.profs, start_date: item.start_date, end_date: item.end_date, is_active: item.is_active}));
        res.json(retprfs.prfs);
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const active_status = async (req, res) => {
    try{
        const crs_array = await Course.findOne({"_id": db.ObjectId(req.params.id)}).toArray();
        const stat = crs_array[0].is_active;
        res.json(stat);
    }
    catch (error){
        res.json({message: error.message});
    }
}

export const getAllActiveCourses = async (req, res) => {
    console.log("getAllActiveCourses called %s", JSON.stringify(req.params));
    try {
        const crs = await Course.find({"is_active": 1}).toArray();
        const retcrs = crs.map(item => ({ id : item._id, profs: item.profs, is_active: item.is_active, start_date: item.start_date, end_date: item.end_date}));
        res.json(retcrs);
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const getAllInactiveCourses = async (req, res) => {
    console.log("getAllActiveCourses called %s", JSON.stringify(req.params));
    try {
        const crs = await Course.find({"is_active": 0}).toArray();
        const retcrs = crs.map(item => ({ id : item._id, profs: item.profs, is_active: item.is_active, start_date: item.start_date, end_date: item.end_date}));
        res.json(retcrs);
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const counts = async (req, res) => {
    console.log("counts called %s", JSON.stringify(req.params));
    try {
        const prof = await Prof.find().toArray();
        let prof_count = prof.length;
        const crs = await Course.find().toArray();
        let course_count = crs.length;
        const act_crs = await Course.find({"is_active":1}).toArray();
        let active_course_count = act_crs.length;
        const inact_crs = await Course.find({"is_active":0}).toArray();
        let inactive_course_count = inact_crs.length;
        const std = await Student.find().toArray();
        let student_count = std.length;
        res.json({prof_count,course_count,student_count,active_course_count,inactive_course_count});
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const new_course = async (req, res) => {
    console.log("add new course called %s", JSON.stringify(req.params));
    const d = new Date();
    let text = d.toString();
    let dat = text.substring(4,15)
    await Course.insertOne({
        name : req.body.name,
        is_active:1,
        start_date: dat,
        end_date: req.body.end_date,
        $push: {profs: req.params.id}
    })
}