import React from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import {User,Student,ChalkboardTeacher,CurrencyInr,BookOpen,Book,Books} from 'phosphor-react'

function Home() {
  return (
    <div className="home">
        <div className="side"><Sidebar/></div>
    <div className="homeContainer">
        <Navbar/>
        <p className="center">Users</p>
        <div className="d-flex wid">
        <Widgets type="Students" count="1212" perc="30" money="no" icon={<Student className="icon color1" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="Teachers" count="121313" perc="50" money="no" icon={<ChalkboardTeacher className="icon color2" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="TAs" count="2424" perc="-90" money="no" icon={<User className="icon color3" size={32} color="#0b0a0a" weight="duotone" />}/>
        </div>
        <p className="center">Courses</p>
        <div className="d-flex wid">
        <Widgets type="Total Courses" count="210" perc="0" money="no" icon={<Books className="icon" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="Running Courses" count="120" perc="0" money="no" icon={<BookOpen className="icon color2" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="Inactive Courses" count="90" perc="0" money="no" icon={<Book className="icon color3" size={32} color="#0b0a0a" weight="duotone" />}/>
        </div>
        <p className="center">Enrolled</p>
        <div className="d-flex wid">
        <Widgets type="Subscribed Students" count="10000" perc="20" money="yes" icon={<CurrencyInr className="icon" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="Audit Students" count="0" perc="70" money="yes" icon={<CurrencyInr className="icon color2" size={32} color="#0b0a0a" weight="duotone" />}/>
        <Widgets type="Free trial" count="0" perc="-10" money="yes" icon={<CurrencyInr className="icon color3" size={32} color="#0b0a0a" weight="duotone" />}/>
        </div>
    </div>
    </div>
  )
}

export default Home
