import React from 'react';
import './header.css';
import logo from '../tweeter.svg';


const Header = ({active}) => {
  const [activeLink, setActiveLink ] = React.useState('');
  return(
    <header>
      <div className = 'container-fluid justify-content-between p-3 centered px-5'>
        <a href = '/' className = 'logoArea' alt = 'logo'>
          <img src = {logo} alt = 'tweeter logo'/>
        </a>
        <ul className = 'header__links list-unstyled justify-content-between centered'>
          <li><a className = 'header_link active' href = '/home'>Home</a></li>
          <li><a className = 'header_link' href = '/explore'>Explore</a></li>
          <li><a className = 'header_link' href = '/bookmarks'>Bookmarks</a></li>
        </ul>
        <div className = 'user__details centered'>
          <div className = 'profile__image'></div>
          <a href = '/profile' className='m-0 emphasis'>User's Name</a> 
        </div>

      </div>
    </header>
  )

}
export default Header;