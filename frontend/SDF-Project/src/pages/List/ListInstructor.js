import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './listInstructor.css'
import DatatableInstructor from '../../components/datatable/DatatableInstructor'
function ListInstructor() {
  return (
    <div className="list">
        <div className="side"><Sidebar/></div>
    <div className="listContainer">
        <Navbar/>
        <DatatableInstructor/>
    </div>
    </div>
  )
}

export default ListInstructor
