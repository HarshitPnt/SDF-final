import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import DiscreteMaths from './components/DiscreteMaths';
import IntroToCS from './components/IntroToCS';
import PracticalPhysics from './components/PracticalPhysics';
import IntroToC from './components/IntroToC';
import DiscreteMathsTwo from './components/DiscreteMathsTwo';
import IntroToCSTwo from './components/IntroToCSTwo';
import IntroToCTwo from './components/IntroToCTwo';
import PhysicsLabTwo from './components/PhysicsLabTwo';
import DiscreteVideos from './components/discrete_maths/DiscreteVideos';
import DiscreteMaterial from './components/discrete_maths/DiscreteMaterial';
import DiscreteMaterials from './components/discrete_maths/DiscreteMaterials';
import DiscreteMaterials2 from './components/discrete_maths/DiscreteMaterials2';
import DiscreteCourse from './components/discrete_maths/DiscreteCourse';
import Quiz from './components/discrete_maths/DiscreteQuizz';
import DiscreteQuizzes from './components/discrete_maths/DiscreteQuizzes';
import CVideos from './components/intro_to_c/CVideos';
import CCourse from './components/intro_to_c/CCourse';
import CMaterial from './components/intro_to_c/CMaterial';
import CMaterails from './components/intro_to_c/CMaterials';
import CQuizzes from './components/intro_to_c/CQuizzes';
import PhysicsVideos from './components/physics_lab/PhysicsVideos';
import PhysicsCourse from './components/physics_lab/PhysicsCourse';
import PhysicsMaterial from './components/physics_lab/PhysicsMaterial';
import PhysicsMaterails from './components/physics_lab/PhysicsMaterials';
import PhysicsQuizzes from './components/physics_lab/PhysicsQuizzes';
import CSVideos from './components/intro_to_cs/CSVideos';
import CSCourse from './components/intro_to_cs/CSCourse';
import CSMaterial from './components/intro_to_cs/CSMaterial';
import CSMaterials from './components/intro_to_cs/CSMaterial';
import CSQuizzes from './components/intro_to_cs/CSQuizzes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Discrete_Mathematics" element={<DiscreteMaths />}></Route>
      <Route path="Introduction_to_Computer_Science" element={<IntroToCS />}></Route>
      <Route path="Practical_Physics" element={<PracticalPhysics />}></Route>
      <Route path="Introduction_to_C" element={<IntroToC />}></Route>
      <Route path="Discrete-Mathematics" element={<DiscreteMathsTwo />}>
        <Route path="Course" element={<DiscreteCourse />}></Route>
        <Route path="Lectures" element={<DiscreteVideos />} ></Route>
        <Route path="Material" element={<DiscreteMaterial />}>
          <Route path="Lecture_Material_1" element={<DiscreteMaterials />}></Route>
          <Route path="Lecture_Material_2" element={<DiscreteMaterials2 />}></Route>
          <Route path="Lecture_Material_3" element={<DiscreteMaterials />}></Route>
          <Route path="Lecture_Material_4" element={<DiscreteMaterials2 />}></Route>
          <Route path="Lecture_Material_5" element={<DiscreteMaterials />}></Route>
          <Route path="Lecture_Material_6" element={<DiscreteMaterials2 />}></Route>
          <Route path="Lecture_Material_7" element={<DiscreteMaterials />}></Route>
          <Route path="Lecture_Material_8" element={<DiscreteMaterials2 />}></Route>
          <Route path="Lecture_Material_9" element={<DiscreteMaterials />}></Route>
          <Route path="Lecture_Material_10" element={<DiscreteMaterials2 />}></Route>
          <Route path="Lecture_Material_11" element={<DiscreteMaterials />}></Route>
          <Route path="Lecture_Material_12" element={<DiscreteMaterials2 />}></Route>
          <Route path="Lecture_Material_13" element={<DiscreteMaterials />}></Route>
          <Route path="Lecture_Material_14" element={<DiscreteMaterials2 />}></Route>
          <Route path="Lecture_Material_15" element={<DiscreteMaterials />}></Route>
          <Route path="Lecture_Material_16" element={<DiscreteMaterials2 />}></Route>
          <Route path="Lecture_Material_17" element={<DiscreteMaterials />}></Route>
          <Route path="Lecture_Material_18" element={<DiscreteMaterials2 />}></Route>
        </Route>
        <Route path="Quizzes" element={<DiscreteQuizzes />}></Route>
        <Route exact path="/Discrete-Mathematics/Quizzes/Quiz" element={<Quiz />}></Route>       
      </Route>
      <Route path="Introduction-to-CS" element={<IntroToCSTwo />}>
        <Route path="Course" element={<CSCourse />}></Route>
        <Route path="Lectures" element={<CSVideos />}></Route>
        <Route path='Material' element={<CSMaterial />}>
          <Route path='Lecture_Material_1' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_2' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_3' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_4' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_5' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_6' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_7' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_8' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_9' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_10' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_11' element={<DiscreteMaterials />}></Route>
          <Route path='Lecture_Material_12' element={<DiscreteMaterials />}></Route>
        </Route>
        <Route path='Quizzes' element={<CSQuizzes />}></Route>
        <Route exact path="/Introduction-to-CS/Quizzes/Quiz" element={<Quiz />}></Route>
      </Route>
      <Route path="Practical-Physics" element={<PhysicsLabTwo />}>
        <Route path='Course' element={<PhysicsCourse />}></Route>
        <Route path='Lectures' element={<PhysicsVideos />}></Route>
        <Route path='Material' element={<PhysicsMaterial />}>
          <Route path='Lecture_Material_1' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_2' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_3' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_4' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_5' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_6' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_7' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_8' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_9' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_10' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_11' element={<PhysicsMaterails />}></Route>
          <Route path='Lecture_Material_12' element={<PhysicsMaterails />}></Route>
        </Route>
        <Route path='Quizzes' element={<PhysicsQuizzes />}></Route>
        <Route exact path="/Practical-Physics/Quizzes/Quiz" element={< Quiz />}></Route>
      </Route>
      <Route path="Introduction-to-C" element={<IntroToCTwo />}>
        <Route path='Course' element={<CCourse />}></Route>
        <Route path='Lectures' element={<CVideos />}></Route>
        <Route path='Material' element={<CMaterial />}>
          <Route path='Lecture_Material_1' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_2' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_3' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_4' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_5' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_6' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_7' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_8' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_9' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_10' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_11' element={<CMaterails />}></Route>
          <Route path='Lecture_Material_12' element={<CMaterails />}></Route>
        </Route>
        <Route path='Quizzes' element={<CQuizzes/>}></Route>
        <Route exact path="/Introduction-to-C/Quizzes/Quiz" element={<Quiz />}></Route>
      </Route>
      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
