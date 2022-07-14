import React from 'react'
import './widget.css'
import {CaretUp,CaretDown,Student,ChalkboardTeacher,User} from 'phosphor-react'
import {Link,useParams} from 'react-router-dom'

function Widgets(props) {
    let data;
    const {adminID}= useParams()
    data={
        user:props.type,
        moneyRelated:props.money,
        number:props.count,
        icon:<User className="icon" size={32} color="#e22c2c" weight="duotone" />,
        caret:Number(props.perc)>0?<CaretUp size={40} color="#141414" weight="light" />:<CaretDown size={40} color="#141414" weight="light" />,
        per:Number(props.perc)>0?Number(props.perc):-Number(props.perc),
        link: props.type==="Students"? <Link to={`/${adminID}/user/student`}>See all Students</Link>:props.type==="Teachers"? <Link to ={`/${adminID}/user/instructor`}>See all Instructors</Link>:(props.type==="Running Courses"||props.type==="Total Courses"||props.type==="Inactive Courses")? <Link to ={`/${adminID}/courses`}>See all courses</Link>:props.type==="TAs"?"See all TAs":"See revenue",
        isMoney:props.money
    }
    // switch(props.type){
    //     case "Student":
    //         data={
    //             user:"Students",
    //             moneyRelated:"no",
    //             number:props.count,
    //             icon:<User className="icon" size={32} color="#e22c2c" weight="duotone" />,
    //             caret:Number(props.perc)>0?<CaretUp size={40} color="#141414" weight="light" />:<CaretDown size={40} color="#141414" weight="light" />,
    //             per:Number(props.perc)>0?Number(props.perc):-Number(props.perc),
    //             link:"See all Students"
    //         }
    //     case "Teachers":
    //         data={
    //             user:"Teachers",
    //             moneyRelated:"no",
    //             number:props.count,
    //             icon:<User className="icon" size={32} color="#e22c2c" weight="duotone" />,
    //             caret:Number(props.perc)>0?<CaretUp size={40} color="#141414" weight="light" />:<CaretDown size={40} color="#141414" weight="light" />,
    //             per:Number(props.perc)>0?Number(props.perc):-Number(props.perc),
    //             link:"See all Teachers"
    //         }
    //         case "TAs":
    //         data={
    //             user:"TAs",
    //             moneyRelated:"no",
    //             number:props.count,
    //             icon:<User className="icon" size={32} color="#e22c2c" weight="duotone" />,
    //             caret:Number(props.perc)>0?<CaretUp size={40} color="#141414" weight="light" />:<CaretDown size={40} color="#141414" weight="light" />,
    //             per:Number(props.perc)>0?props.perc+"%":-props.perc+"%",
    //             link:"See all TAs"
    //         }

    // }
  return (
    <div className="content">
      <div className="left-box">
        <span className="User">{data.user}</span>
        <span className="count">{data.isMoney==="yes"?"$"+data.number:data.number}</span>
        <span className="link">{data.link}</span>
    </div>
      <div className="Right">
        <span className="arrow">{data.caret}<p>{data.per+"%"}</p></span>
        {props.icon}
    </div>
    </div>
  )
}

export default Widgets
