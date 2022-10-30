import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Main.css'
import { IconContext } from 'react-icons';

function Before_Cert() {

  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="header">
        <Link to="#" className='menu-icon'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link> 
        <p className="IAG">IAG</p>
        <p className="user-icon">
          <BiIcons.BiUserCircle/>
          </p>
        <p className="Auth">Auth</p>
      </div>
      <div className="mainContainer">
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Before_Cert;
