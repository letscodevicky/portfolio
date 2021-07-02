import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link , withRouter} from 'react-router-dom';
import "./Navv.css"

class Navv extends React.Component {
  

  render () {
const {location} = this.props;

const homeclass = location.pathname === '/' ? 'active-item':'';
const aboutclass = location.pathname === '/about' ? 'active-item':'';
const contactclass = location.pathname === '/contact' ? 'active-item':'';
const skillsclass = location.pathname === '/skills' ? 'active-item':'';
const projectclass = location.pathname === '/projects' ? 'active-item':'';


    return (
      <Menu>
        <Link to ='/'className={`menu-item ${homeclass}`} >
            Home
        </Link>
        <Link to ='/about'className={`menu-item ${aboutclass}`}>
            About
        </Link>
        <Link to ='/skills'className={`menu-item ${skillsclass}`} >
            Skills
        </Link>
        <Link to ='/projects'className={`menu-item ${projectclass}`} >
            Projects
        </Link>
        <Link to ='/contact'className={`menu-item ${contactclass}`}>
            Contact
        </Link>
        
      </Menu>
    );
  }       
}
export default withRouter(Navv);