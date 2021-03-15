import React from 'react';
import './header.css';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { ArrowDropDown, Group, AccountCircleRounded, ExitToAppRounded, Settings, ArrowDropUp } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const Header = () => {
  const [menuOpenStatus, setMenuOpenStatus] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('Home');
  const colorPalette = useSelector(store => store.colorPalette);
  const menu = React.useRef();
  const headerOpenerRef = React.useRef();
  const menuOpenStatusRef = React.useRef(menuOpenStatus);
  
  const setMenuOpenStatusRef = (value) => {
    menuOpenStatusRef.current = value;
    setMenuOpenStatus(value);
  }

  React.useEffect(()=>{
    document.body.addEventListener('click', clickOut)
    return () => document.body.removeEventListener('click', clickOut);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function clickOut(e){
    if(e.target === headerOpenerRef.current || headerOpenerRef.current.contains(e.target)){
      setMenuOpenStatusRef(!menuOpenStatusRef.current)
    }else setMenuOpenStatusRef(false);
  }

  return (
    <React.Fragment>
      <header class='centered'>
        <div className='container-fluid justify-content-between p-2 px-3 p-lg-4 px-lg-5 centered '>
          <Link to='/' className='logoArea' alt='logo'>
            <Logo dark={true} />
          </Link>
          <ul className='header__links list-unstyled justify-content-between centered'>
            <li><Link className={`header_link ${activeLink === "Home" ? 'active' : ''}`} style={activeLink === 'Home' ? { color: colorPalette.special } : { color: 'inherit' }} onClick={e => setActiveLink(e.target.textContent)} to='/'>Home</Link></li>
            <li><Link className={`header_link ${activeLink === "Explore" ? 'active' : ''}`} style={activeLink === 'Explore' ? { color: colorPalette.special } : { color: 'inherit' }} onClick={e => setActiveLink(e.target.textContent)} to='/explore'>Explore</Link></li>
            <li><Link className={`header_link ${activeLink === "Bookmarks" ? 'active' : ''}`} style={activeLink === 'Bookmarks' ? { color: colorPalette.special } : { color: 'inherit' }} onClick={e => setActiveLink(e.target.textContent)} to='/bookmarks'>Bookmarks</Link></li>
          </ul>
          <div ref = {headerOpenerRef} className='usernameStuff centered' onClick={() =>setMenuOpenStatusRef(!menuOpenStatusRef.current)}>
            <div className='profile__image'></div>
            <div className='m-0 emphasis'>Jeremiah Lena</div>
            {!menuOpenStatus ? <ArrowDropDown /> : <ArrowDropUp />}
          </div>
        </div>
      </header>
      {menuOpenStatus && (
        <div className='profile__menu p-2' ref = {menu}>
          <div className='link p-1'>
            <Link to='/profile'><AccountCircleRounded style = {{color: colorPalette.background}} /><span>My Profile</span></Link>
          </div>
          <div className='link p-1'>
            <Link to='/groupchat'><Group style = {{color: colorPalette.background}} /><span>Group Chat</span></Link>
          </div>
          <div className='link p-1'>
            <Link to='/settings'><Settings style = {{color: colorPalette.background}} /><span>Settings</span></Link>
          </div>
          <div className='link p-1 text-danger'>
            <Link to='/login'><ExitToAppRounded style = {{color: colorPalette.background}} /><span>Logout</span></Link>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Header;