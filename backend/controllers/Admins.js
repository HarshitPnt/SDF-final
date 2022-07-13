import Admin from '../models/adminModel.js';
import db from "mongodb"

export const getAllAdmins = async (req, res) => {
    console.log("getAllAdmins called %s", JSON.stringify(req.params));
    try {
        const adms = await Admin.find().toArray();
        const retadms = adms.map(item => ({ id : item._id, username: item.username, email: item.email, age: item.age, phoneno: item.phoneno}));
        res.json(retadms);
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}

export const getAdminById = async (req, res) => {
    try {
        const adms = await Admin.find({"_id": db.ObjectId(req.params.id)}).toArray();
        res.json(adms[0]);
    } 
    catch (error) {
     res.json({ message: error.message });
    }
}
