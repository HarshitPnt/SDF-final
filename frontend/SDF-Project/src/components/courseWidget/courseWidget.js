import React from 'react'
import './coursewidget.css'

function CourseWidget(props) {
    const newfunc=()=>{
        console.log(props.styles.back)
    }

  return (
    <div className="main-box-wid" onLoad={newfunc()
    } style={props.styles.back}>
      <div className="left-box-wid" style={props.styles.left}>
        <p className="left-content-wid" style={props.styles.text}>{props.left}</p>
      </div>
      <div className="right-box-wid">
        <p className="right-content-wid" style={props.styles.text}>{props.right}</p>
      </div>
    </div>
  )
}

export default CourseWidget
