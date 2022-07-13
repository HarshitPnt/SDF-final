import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './listInstructor.css'
import DatatableTAs from '../../components/datatable/DatatableTAs'

function ListTAs() {
  return (
    <div>
    <div className="list">
      <div className="side"><Sidebar/></div>
  <div className="listContainer">
      <Navbar/>
      <DatatableTAs/>
  </div>
  </div>
  </div>
  )
}

export default ListTAs
