import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import { Link } from 'react-router-dom';
import './Main.css'

function Before_Cert() {

  return (
    <>
      <div className="header">
        <Link to="#" className='menu-icon'>
          <FaIcons.FaBars  />
        </Link> 
        <p className="IAG">IAG</p>
        <p className="user-icon">
          <BiIcons.BiUserCircle/>
          </p>
        <p className="Auth">Auth</p>
      </div>
      <div className="mainContainer">
        <p className="message">아마존 웹 서비스 인증 해주세요</p>
      </div>
    </>
  )
}

export default Before_Cert;
