import Login from "./components/Login";
import LoginForm from "./components/LoginForm"
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login_2 from "./components/Login_2";
import Sign_Up_form from "./components/Sign_Up_form";
import Home from "./pages/Home/Home"
import ListInstructor from "./pages/List/ListInstructor"
import ListStudent from "./pages/List/ListStudent";
import ListTAs from "./pages/List/ListTAs";
import New from "./pages/New/New"
import UserInstructors from "./pages/User/UserInstructor";
import{
  BrowserRouter,
  Routes,
  Route} from "react-router-dom"
  import {instructorInput,studentInput, taInput} from './components/datatable/formInput'
  import Courses from "./pages/Courses/Courses";
import NewCourse from "./pages/Courses/NewCourse";
import Inbox from './pages/Inbox/Inbox'
import Compose from './pages/Inbox/Compose'
import Sent from "./pages/Inbox/Sent";
// import Student_sidebar from "./components/student-sidebar/Student_sidebar";
import StudentDashboard from "./pages/Student-Home/Student_Dashboard/StudentDashboard";
import StudentInbox from "./pages/Inbox/InboxStudent";
import SentStudent from "./pages/Inbox/SentStudent";
import ComposeStudent from './pages/Inbox/ComposeStudent'
import UserStudent from './pages/User/UserStudent'
import InstructorDashboard from "./pages/Instructor-Home/InstructorDashboard/InstructorDashboard";
import AddCourse from "./pages/Instructor-Home/Add-Course/AddCourse";
import AddCourseMaterial from "./pages/Courses/AddCourseMaterial";
import Doubts from "./pages/Doubts/Doubts";
import NewStudent from "./pages/New/NewStudent";
import NewTA from "./pages/New/NewTA";
import InboxInstructor from './pages/Inbox/InboxInstructor'
import SentInstructor from "./pages/Inbox/SentInstructor";
import ComposeInstructor from "./pages/Inbox/ComposeInstructor";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ 
            <>
            <div className="top-login">
            <Navbar/>
            </div>
            <div className="main-2">
            <Login_2/>
            </div>
            
            </>
            }>

          </Route>
          <Route path="/:adminID">
            <Route index element={<Home/>}/>
          </Route>
          <Route path="/:adminID/user/instructor">
            <Route index element={<ListInstructor/>}></Route>
            <Route path='/:adminID/user/instructor/:instructorID' element={<UserInstructors/>}></Route>
            </Route>
            {/* <Route path=":userId" element={<User/>}/> */}
            <Route path='/:adminID/user/instructor/new' element={<New inputs={instructorInput} title={"Add A New Instructor"} pic_title={"Profile Picture"}/>}/>
          
          <Route path="/:adminID/user/student">
            <Route index element={<ListStudent/>}></Route>
            <Route path="/:adminID/user/student/:studentID" element={<UserStudent/>}/>
            
          </Route>
          <Route path="/:adminID/user/student/new" element={<NewStudent title={"Add A New Student"} pic_title={"Profile Picture"}/>}/>
          {/* <Route path="/:adminID/user/TA"> */}
            {/* <Route index element={<ListTAs/>}></Route> */}
            {/* <Route path=":userId" element={<User/>}/> */}
            {/* <Route path="/:adminID/user/TA/new" element={<New inputs={taInput} title={"Add A New TA"} />}/> */}
          {/* </Route> */}
          <Route path="/:adminID/courses">
              <Route index element={<Courses/>}></Route>
              <Route path="/:adminID/courses/new" element={<NewCourse/>}></Route>
          </Route>
          <Route path="/:adminID/inbox">
            <Route index element={<Inbox/>}></Route>
            <Route path="/:adminID/inbox/compose" element={<Compose/>}/>
            <Route path="/:adminID/inbox/sent" element={<Sent/>}></Route>
          </Route>
          
          <Route path="/student/:studentID">
            <Route path='/student/:studentID/profile' element={<UserStudent/>}></Route>
            <Route path="/student/:studentID/inbox" element={<StudentInbox/>}></Route>
            <Route path='/student/:studentID/inbox/sent' element={<SentStudent/>}></Route>
            <Route path='/student/:studentID/inbox/compose' element={<ComposeStudent/>}></Route>
           
            <Route index element={<StudentDashboard/>}></Route>
          </Route>
          <Route path='/instructor/:instructorID'>
            <Route index element={<InstructorDashboard/>}></Route>
            <Route path="/instructor/:instructorID/addrequest" element={<AddCourse/>}></Route>
            <Route path='/instructor/:instructorID/courses/add' element={<AddCourseMaterial/>}></Route>
            <Route path="/instructor/:instructorID/doubts" element={<Doubts role="inst"/>}></Route>
            <Route path="/instructor/:instructorID/inbox" element={<InboxInstructor/>}></Route>
            <Route path="/instructor/:instructorID/inbox/sent" element={<SentInstructor/>}></Route>
            <Route path='/instructor/:instructorID/inbox/compose' element={<ComposeInstructor/>}></Route>
          </Route>
          
          <Route path="*" element={<div>Page Not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
