import Detail from '../models/detailsModel.js';
import Admin from '../models/adminModel.js';
import Prof from '../models/ProfModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Student from '../models/StudentModel.js';

const secret_key = 'awegnfciuhoxj3o2u9xu@#*!^#&@490dfdf576g/hiuyuyfytdseewwAEGfg@#*(&@@segcest356457zds4'

export const login = async (req, res) => {
	const { email, password, role } = req.body
	const user = await Detail.findOne({ email })

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid email/password' })
	}
	if(role == "student"){
		const count = await Student.find({email}).count()
		const std = await Student.find({email}).toArray()
		const m_id = std[0]._id;
		const s_id = m_id.toString();
		if( count == 0 ){
			return res.json({"message": "invalid email/password"})
		}
		if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign(
				{
					id: user._id,
					email: user.email
				},
				secret_key
			)
	
			return res.json({ status: 'ok', data: token, "id": s_id })
		}
	}
	if(role == "admin"){
		const count = await Admin.find({email}).count()
		if( count == 0 ){
			return res.json({"message": "invalid email/password"})
		}
		const std = await Admin.find({email}).toArray()
		const m_id = std[0]._id;
		const s_id = m_id.toString();
		if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign(
				{
					id: user._id,
					email: user.email
				},
				secret_key
			)
	
			return res.json({ status: 'ok', data: token, "id": s_id })
		}
	}
	if(role == "instructor"){
		const count = await Prof.find({email}).count()
		if( count == 0 ){
			return res.json({"message": "invalid email/password"})
		}
		const std = await Prof.find({email}).toArray()
		const m_id = std[0]._id;
		const s_id = m_id.toString();
		if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign(
				{
					id: user._id,
					email: user.email
				},
				secret_key
			)
	
			return res.json({ status: 'ok', data: token, "id": s_id })
		}
	}
	res.json({ status: 'error', error: 'Invalid email/password'})
}

export const registeradmin = async (req, res) => {
	const { username, email, age, phoneno, password: original_password, confirm_password} = req.body

	if (!email || typeof email !== 'string') {
		return res.json({ status: 'error', error: 'Invalid email' })
	}

	if (!original_password || typeof original_password !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (original_password.length < 8) {
		return res.json({
			status: 'error',
			error: 'Password should have atleast 8 characters'
		})
	}
	if (confirm_password != original_password){
		return res.json({
			status: 'error',
			error: 'Passwords are not matching'
		})
	}

	const count = Admin.find({email}).count()

	if(count > 0){
		return res.json({ status: 'error', error: 'Email already exists' })
	}

	const password = await bcrypt.hash(original_password, 10)

	try {
		await Detail.insertOne({
			email,
			password
		})
		await Admin.insertOne({
			username,
			email,
			age,
			phoneno
		})

		console.log('Registered successfully: ');
		res.json({ status: 'ok' });

	} 
	catch (error) {
		throw error
	}

}
export const registerprof = async (req, res) => {
	const { image, username, email, expertise, age, phoneno, password: original_password, confirm_password} = req.body

	if (!email || typeof email !== 'string') {
		return res.json({ status: 'error', error: 'Invalid email' })
	}

	if (!original_password || typeof original_password !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (original_password.length < 8) {
		return res.json({
			status: 'error',
			error: 'Password should have atleast 8 characters'
		})
	}
	if (confirm_password != original_password){
		return res.json({
			status: 'error',
			error: 'Passwords are not matching'
		})
	}
	const count = Prof.find({email}).count()

	if(count > 0){
		return res.json({ status: 'error', error: 'Email already exists' })
	}
	
	const password = await bcrypt.hash(original_password, 10)

	try {
		await Detail.insertOne({
			email,
			password
		})
		await Prof.insertOne({
			username,
			email,
			age,
			phoneno,
			expertise,
			image,
			courses: []
		})
		console.log('Registered successfully: ')
		res.json({ status: 'ok' })
	} catch (error) {
		throw error
	}

}
export const registerstudent = async (req, res) => {
	const { image, username, name, email, age, phoneno, password: original_password, confirm_password} = req.body

	if (!email || typeof email !== 'string') {
		return res.json({ status: 'error', error: 'Invalid email' })
	}

	if (!original_password || typeof original_password !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (original_password.length < 8) {
		return res.json({
			status: 'error',
			error: 'Password should have atleast 8 characters'
		})
	}
	if (confirm_password != original_password){
		return res.json({
			status: 'error',
			error: 'Passwords are not matching'
		})
	}

	const count = Student.find({email}).count()

	if(count > 0){
		return res.json({ status: 'error', error: 'Email already exists' })
	}

	const password = await bcrypt.hash(original_password, 10)

	try {
		await Detail.insertOne({
			email,
			password
		})
		const d = new Date;
		let text = d.toString();
		await Student.insertOne({
			username,
			email,
			age,
			phoneno,
			image,
			name,
			joindate: text,
			courses: []
		})

		console.log('Registered successfully: ')
		res.json({ status: 'ok' })

	} catch (error) {
		throw error
	}

}
