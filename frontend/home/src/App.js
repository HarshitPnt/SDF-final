import logo from './logo.svg';
//import './images/Intro_to_C';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <div id="Heading">
            <h1>Online Education Management System - IITH</h1>
            <h2>Learn More!</h2>
        </div>
        <div id="buttons">
            <button><a href='http://192.168.51.89:3001/login'>Log-in</a></button>
            <button><a href='http://192.168.51.89:3001/login'>Sign-Up</a></button>
            <button id='dshbd'><a href='http://192.168.51.89:3001'>Dashboard</a></button>
        </div>
        <div id="Nav-bar">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Courses">Courses</a></li>
                <li><a href="#About">About Us</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
        <br />
        <br />
        <div id="Home"></div>
        <div id="home">
            <h1>Start learning from the world's best intitute and best Instructors</h1>
            <p/> Learn Courses from the best instructors and acquire proffessional certificate on completion. <br />
                 Learn from a lot of vedio lectures and best course material from the courses. Download them and watch offline
                 <br />Test your calibre through attempting tests. Discuss doubts and concepts with learners across the world and <br />
                  the Teaching Assistants, expand your wings :
            <p>Finally,...</p>
            <h2>Happy Learning...:</h2>
        </div>
        <br />
        <br />
        <div id="Courses"></div>
        
        <div id="courses">
            <h1>Explore Courses</h1>
            <div id="search">
                <label for="course-name">Search for Courses</label>
                <input type="text" name="course-name" />
            </div>
            <section>
                <div class="container">
                  <Link to="/Discrete_Mathematics">
                    <div class="course-card">
                        <div class="content">
                            <div class="imgBx">
                                <img src= {process.env.PUBLIC_URL+"images/discrete_maths"} />
                            </div>
                            <div class="contentBx">
                                <h3>Discrete Maths</h3>
                            </div>
                            <div class="enroll">
                                <button>Enroll</button>
                            </div>
                        </div>
                    </div>
                  </Link>
                </div>
                <div class="container">
                  <Link to="/Introduction_to_Computer_Science">
                    <div class="course-card">
                        <div class="content">
                            <div class="imgBx">
                                <img src={process.env.PUBLIC_URL+"images/Intro_to_CS"} />
                            </div>
                            <div class="contentBx">
                                <h3>Introduction to <br /> Computer Science</h3>
                            </div>
                            <div class="enroll">
                                <button>Enroll</button>
                            </div>
                        </div>
                    </div>
                  </Link>
                </div>
                <div class="container">
                <Link to="/Practical_Physics">
                    <div class="course-card">
                        <div class="content">
                            <div class="imgBx">
                                <img src={process.env.PUBLIC_URL+"images/physics_lab"}/>
                            </div>
                            <div class="contentBx">
                                <h3>Practical physics</h3>
                            </div>
                            <div class="enroll">
                            <button>Enroll</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                  
                </div>
                <div class="container">
                  <Link to="/Introduction_to_C">
                    <div class="course-card">
                        <div class="content">
                            <div class="imgBx">
                                <img src={process.env.PUBLIC_URL+"images/Intro_to_C.png"}/>
                            </div>
                            <div class="contentBx">
                                <h3>Introduction to <br /> C Programming</h3>
                            </div>
                            <div class="enroll">
                                <button>Enroll</button>
                            </div>
                        </div>
                    </div>
                  </Link>
                </div>
            </section>
        </div>
        <br />
        <br></br>
        <div id="About"></div>
        <div id="about">
            <h1>About Us</h1>
            <p/>The courses are offered by Indian Institute of Hyderabad(IITH), a premiere institue of science and technology established in 2008. <br />
             IITH has been consistently ranked in the top 10 institutes in India for Engineering according to NIRF <br />
              making it one of the most coverted schools for science and technology in the country.
            <p>We offer courses of undergraduate programs in all classical engineering discipline, applied sciences, design as well as <br />
                several modern interdisciplinary aresa. </p>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="images/person" />
                        <div class="container">
                            <p/>
                            <strong>Cheekatla Hema Sri</strong>
                            <br />
                            UG second sem student
                            <br />
                            cs21btech11013@iith.ac.in
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src="images/person" />
                        <div class="container">
                            <p/>
                            <strong>Harshit Pant</strong>
                            <br />
                            UG second sem student
                            <br />
                            cs21btech11021@iith.ac.in
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src="images/person" />
                        <div class="container">
                            <p/>
                            <strong>Kotikalapudi Karthik</strong>
                            <br />
                            UG second sem student
                            <br />
                            cs21btech11030@iith.ac.in
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div id="Contact"></div>
        <div id="contact">
            <h1>Coutact Us</h1>
            <p>Drop your requests and sugessoions over here...</p>
            <form action="" />
                <label for="name">Enter your Name</label>
                <input type="text" name="Name" placeholder="type your name" required />
                <br />
                <label for="Email">Enter your email address</label>
                <input type="email" name="Email" placeholder="type your mail" required />
                <br />
                <label for="discription">Enter your suggessions</label>
                <textarea name="discription" id="discription" cols="50" rows="5"></textarea>
                <br />
                <input type="submit" />
        </div>
      </div>
    </div>
  );
}

export default App;
