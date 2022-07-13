import React from 'react'
import './navbar.css'
import {MagnifyingGlass,BellSimple,Chat} from 'phosphor-react'
import {Link,useParams} from 'react-router-dom'

function Navbar() {
  const {adminID}=useParams()
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
            <input className="field-text" type="text" placeholder="Search" autoComplete='off'/>
            <MagnifyingGlass size={32} color="#141414" weight="light" className="search-icon" />
            </div>
            <div className="items">
                <div className="item"><BellSimple size={32} color="#141414" weight="light" /></div>
                <div className="item">
           <Link to ={`/${adminID}/inbox`}><Chat size={32} color="#141414" weight="light" className="Chat-icon-navbar"/></Link>
            
            </div>
            <div className="item"><img className="avatar" src="https://visualpharm.com/assets/314/Admin-595b40b65ba036ed117d36fe.svg" alt="admin-icon" /></div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
