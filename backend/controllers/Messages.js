import Message from '../models/MessageModel.js'
import Admin from '../models/adminModel.js'
import Student from '../models/StudentModel.js'
import Prof from '../models/ProfModel.js'
import db, { ObjectId } from "mongodb"

export const send_admin = async (req, res) => {
    console.log("Message called %s", JSON.stringify(req.params));
    try {
        const admin = await Admin.find({"_id" : db.ObjectId(req.params.id)}).toArray();
        const d = new Date();
        let text = d.toString();
        await Message.insertOne({
            "from" : admin[0].username,
            "to" : req.body.to,
            "subject" : req.body.subject,
            "timestamp" : text,
            "content" : req.body.content
        })
        res.json({"message" : "Message sent succesfully"});
    }
    catch(error){
        res.json({message : error.message});
    }
}
export const send_prof = async (req, res) => {
    console.log("Message called %s", JSON.stringify(req.params));
    try {
        const prof = await Prof.find({"_id" : db.ObjectId(req.params.id)}).toArray();
        const d = new Date();
        let text = d.toString();
        await Message.insertOne({
            "from" : prof[0].username,
            "to" : req.body.to,
            "subject" : req.body.subject,
            "timestamp" : text,
            "content" : req.body.content
        })
        res.json({"message" : "Message sent succesfully"});
    }
    catch(error){
        res.json({message : error.message});
    }
}
export const send_student = async (req, res) => {
    console.log("Message called %s", JSON.stringify(req.params));
    try {
        const std = await Student.find({"_id" : db.ObjectId(req.params.id)}).toArray();
        const d = new Date();
        let text = d.toString();
        await Message.insertOne({
            "from" : std[0].username,
            "to" : req.body.to,
            "subject" : req.body.subject,
            "timestamp" : text,
            "content" : req.body.content
        })
        res.json({"message" : "Message sent succesfully"});
    }
    catch(error){
        res.json({message : error.message});
    }
}

export const getAllMsgsbyId_admin = async (req, res) => {
    console.log("Messages of %s called", JSON.stringify(req.params));
    try {
        const admin = await Admin.find({"_id" : db.ObjectId(req.params.id)}).toArray();
        const msg = await Message.find({
            "to" : admin[0].username
        }).toArray();
        res.json({msg});
    }
    catch(error){
        res.json({message : error.message});
    }
}
export const getAllMsgsbyId_prof = async (req, res) => {
    console.log("Messages of %s called", JSON.stringify(req.params));
    try {
        const prof = await Prof.find({"_id" : db.ObjectId(req.params.id)}).toArray();
        const msg = await Message.find({
            "to" : prof[0].username
        }).toArray();
        res.json({msg});
    }
    catch(error){
        res.json({message : error.message});
    }
}
export const getAllMsgsbyId_student = async (req, res) => {
    console.log("Messages of %s called", JSON.stringify(req.params));
    try {
        const std = await Student.find({"_id" : db.ObjectId(req.params.id)}).toArray();
        const msg = await Message.find({
            "to" : std[0].username
        }).toArray();
        res.json({msg});
    }
    catch(error){
        res.json({message : error.message});
    }
}

export const sentMsgsbyId_student = async (req, res) => {
    console.log("Messages from %s called", JSON.stringify(req.params));
    try {
        const std = await std.find({"_id" : db.ObjectId(req.params.id)}).toArray();
        const msg = await Message.find({
            "from" : std[0].username
        }).toArray();
        res.json({msg});
    }
    catch(error){
        res.json({message : error.message});
    }
}

export const sentMsgsbyId_prof = async (req, res) => {
    console.log("Messages from %s called", JSON.stringify(req.params));
    try {
        const prof = await Prof.find({"_id" : db.ObjectId(req.params.id)}).toArray();
        const msg = await Message.find({
            "from" : prof[0].username
        }).toArray();
        res.json({msg});
    }
    catch(error){
        res.json({message : error.message});
    }
}

export const sentMsgsbyId_admin = async (req, res) => {
    console.log("Messages from %s called", JSON.stringify(req.params));
    try {
        const admin = await Admin.find({"_id" : db.ObjectId(req.params.id)}).toArray();
        const msg = await Message.find({
            "from" : admin[0].username
        }).toArray();
        res.json({msg});
    }
    catch(error){
        res.json({message : error.message});
    }
}
