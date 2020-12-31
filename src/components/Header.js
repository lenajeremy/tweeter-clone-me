import React from 'react';
import './header.css';
import logo from '../tweeter-light.svg';
import {Link} from 'react-router-dom';
import {ArrowDropDown, Group, AccountCircleRounded, ExitToAppRounded, Settings} from '@material-ui/icons';

const Header = ({active}) => {
  const [menuOpenStatus, setMenuOpenStatus] = React.useState(false);
  return(
    <React.Fragment>
    <header>
      <div className = 'container-fluid justify-content-between p-3 centered px-5'>
        <Link to = '/' className = 'logoArea' alt = 'logo'>
          <img src = {logo} alt = 'tweeter logo'/>
        </Link>
        <ul className = 'header__links list-unstyled justify-content-between centered'>
          <li><Link className = 'header_link active' to = '/'>Home</Link></li>
          <li><Link className = 'header_link' to = '/explore'>Explore</Link></li>
          <li><Link className = 'header_link' to = '/bookmarks'>Bookmarks</Link></li>
        </ul>
        <div className = 'centered' onClick = {() => setMenuOpenStatus(!menuOpenStatus)}>
          <div className = 'profile__image'></div>
          <div className='m-0 emphasis'>Jeremiah Lena</div> 
          <ArrowDropDown/>
        </div>
      </div>
    </header>
    {menuOpenStatus && (
          <div className = 'profile__menu p-3'>
            <div className = 'link'>
              <Link to = '/profile'><AccountCircleRounded/><span>My Profile</span></Link>
            </div>
            <div className = 'link'>
              <Link to = '/profile'><Group/><span>Group Chat</span></Link>
            </div>
            <div className = 'link'>
              <Link to = '/settings'><Settings/><span>Settings</span></Link>
            </div>
            <div className = 'link text-danger'>
              <Link to = '/profile'><ExitToAppRounded/><span>Logout</span></Link>
            </div>
          </div>
        )}
    </React.Fragment>
  )
}

export default Header;