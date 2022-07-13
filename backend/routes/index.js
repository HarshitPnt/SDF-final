import express from "express";
import {
   login,
   registeradmin,
   registerprof,
   registerstudent
} from "../controllers/Details.js";
import{
   add_course,
   getAllProfs,
   getProfById,
   getCourseByProf
} from "../controllers/Profs.js";
import{
   getAllAdmins,
   getAdminById
} from "../controllers/Admins.js";
import{
   add_course_student,
   getAllStudents,
   getStudentById
} from "../controllers/Student.js";
import{
   getAllCourses,
   getCourseById,
   Make_active,
   Make_inactive,
   getProfsbycourse,
   active_status,
   getAllActiveCourses,
   getAllInactiveCourses,
   counts,
   new_course
} from "../controllers/Courses.js";
import{
   send_admin,
   send_prof,
   send_student,
   getAllMsgsbyId_admin,
   getAllMsgsbyId_student,
   getAllMsgsbyId_prof,
   sentMsgsbyId_admin,
   sentMsgsbyId_student,
   sentMsgsbyId_prof
} from "../controllers/Messages.js";
import{
   create_quiz,
   get_quiz
} from "../controllers/Quizzes.js"

const router = express.Router();
router.post('/login', login);
router.post('/registeradmin', registeradmin);
router.post('/registerprof', registerprof);//
router.post('/registerstudent', registerstudent);
router.patch('/:insid/:id', add_course);
router.get('/profs', getAllProfs);//
router.get('/profs/:id', getProfById);//
router.get('/messages/admin/:id', getAllMsgsbyId_admin);
router.get('/messages/prof/:id', getAllMsgsbyId_prof);
router.get('/messages/student/:id', getAllMsgsbyId_student);
router.post('/messages/admin/:id', send_admin);
router.post('/messages/prof/:id', send_prof);
router.post('/messages/student/:id', send_student);
router.get('/admins', getAllAdmins);
router.get('/admins/:id', getAdminById);
router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.get('/:id', add_course_student);
router.get('/courses',getAllCourses);
router.get('/courses/counts',counts);//New
router.get('/courses/active', getAllActiveCourses);//New
router.get('/courses/inactive', getAllInactiveCourses);//New
router.get('/courses/:id', getCourseById);
router.patch('/courses/:id/active', Make_active);
router.patch('/courses/:id/inactive', Make_inactive);
router.get('/courses/:id/status', active_status);
router.get('/courses/profs', getProfsbycourse);
router.get('/messages/sent/admin/:id',sentMsgsbyId_admin);
router.get('/messages/sent/prof/:id',sentMsgsbyId_prof);
router.get('/messages/sent/student/:id',sentMsgsbyId_student);
router.post('/quiz/add/:id', create_quiz);//New
router.get('/quiz/:id', get_quiz);//New
router.get('/profs/course/:id', getCourseByProf);//New
router.get('/courses/new/:id', new_course);

console.log("routes setup!");
export default router;