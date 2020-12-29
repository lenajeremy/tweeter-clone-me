import React from 'react';
import './header.css';
import logo from '../tweeter.svg';
import {Link} from 'react-router-dom';


const Header = ({active}) => {
  return(
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
        <div className = 'centered'>
          <div className = 'profile__image'></div>
          <Link to = '/profile' className='m-0 emphasis'>Jeremiah Lena</Link> 
        </div>

      </div>
    </header>
  )

}
export default Header;