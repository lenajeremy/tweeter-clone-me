import React from 'react';
import './header.css';
import logo from '../tweeter.svg';
import {Link} from 'react-router-dom';
import {ArrowDropDown, Group, AccountCircleRounded, ExitToAppRounded, Settings, ArrowDropUp} from '@material-ui/icons';

const Header = () => {
  const [menuOpenStatus, setMenuOpenStatus] = React.useState(false);
  const [activeLink, setActiveLink ] = React.useState('Home');
  return(
    <React.Fragment>
    <header>
      <div className = 'container-fluid justify-content-between p-3 centered px-5'>
        <Link to = '/' className = 'logoArea' alt = 'logo'>
          <img src = {logo} alt = 'tweeter logo'/>
        </Link>
        <ul className = 'header__links list-unstyled justify-content-between centered'>
          <li><Link className = {`header_link ${activeLink === "Home" ? 'active' : ''}`}  onClick = {e => setActiveLink(e.target.textContent)} to = '/'>Home</Link></li>
          <li><Link className = {`header_link ${activeLink === "Explore" ? 'active' : ''}`}  onClick = {e => setActiveLink(e.target.textContent)} to = '/explore'>Explore</Link></li>
          <li><Link className = {`header_link ${activeLink === "Bookmarks" ? 'active' : ''}`}  onClick = {e => setActiveLink(e.target.textContent)} to = '/bookmarks'>Bookmarks</Link></li>
        </ul>
        <div className = 'centered' onClick = {() => setMenuOpenStatus(!menuOpenStatus)}>
          <div className = 'profile__image'></div>
          <div className='m-0 emphasis'>Jeremiah Lena</div> 
          {!menuOpenStatus ? <ArrowDropDown/> : <ArrowDropUp/>}
        </div>
      </div>
    </header>
    {menuOpenStatus && (
          <div className = 'profile__menu py-3 px-2'>
            <div className = 'link p-1'>
              <Link to = '/profile'><AccountCircleRounded/><span>My Profile</span></Link>
            </div>
            <div className = 'link p-1'>
              <Link to = '/groupchat'><Group/><span>Group Chat</span></Link>
            </div>
            <div className = 'link p-1'>
              <Link to = '/settings'><Settings/><span>Settings</span></Link>
            </div>
            <div className = 'link p-1 text-danger'>
              <Link to = '/login'><ExitToAppRounded/><span>Logout</span></Link>
            </div>
          </div>
        )}
    </React.Fragment>
  )
}

export default Header;