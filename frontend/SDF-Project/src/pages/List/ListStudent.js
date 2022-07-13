import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './listInstructor.css'
import DatatableStudent from '../../components/datatable/DatatableStudents'
function ListStudent() {
  return (
    <div>
      <div className="list">
        <div className="side"><Sidebar/></div>
    <div className="listContainer">
        <Navbar/>
        <DatatableStudent/>
    </div>
    </div>
    </div>
  )
}

export default ListStudent
