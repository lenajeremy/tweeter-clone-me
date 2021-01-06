import React from 'react';
import './tweetform.css';
import PublicIcon from '@material-ui/icons/Public';
import ImageIcon from '@material-ui/icons/Image';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom';

const TweetForm = () =>{
  const [textContent, setTextContent] = React.useState('');
  const [image, setImage] = React.useState(null);
  const [publicity, setPublicity ] = React.useState(true);
  const [menuBarVisible, setMenuBarVisible] = React.useState(false);

  React.useEffect(() => {
    console.log(image);
  },[image])

  return(
    <div className = 'tweet_section my-4'>
      <p className = 'emphasis small'>Tweet Something</p>
      <form action = 'things' className = 'tweet__form p-3 d-flex'>
        <div className = 'profile__image'></div>
        <div className = 'others w-100'>
          <textarea className = 'mb-3 w-100' value = {textContent} onChange = {e=>setTextContent(e.target.value)} placeholder = {'What\'s Happening'}/>
          <div className = 'tweet__create__actions small d-flex justify-content-between'>
            <div className = 'd-flex'>
              <div className = 'image mr-3'>
                <ImageIcon/>
                <input type = 'file' accept = 'image/*' multiple onChange = {e => setImage(e.target.files)}/>
              </div>
              <div className = 'privacy' onClick = {e => setMenuBarVisible(!menuBarVisible)}>{publicity ? <React.Fragment><PublicIcon/> Everyone can reply?</React.Fragment> : <React.Fragment><PeopleIcon/> People you follow</React.Fragment>}</div>
              {menuBarVisible && 
                <div className = 'setPublicity profile__menu p-3'>
                  <div className = 'title mb-3'>
                    <div className = 'emphasis text-dark '>Who can reply?</div>
                    <div className = 'faded small'>Who can reply to this Tweet</div>
                  </div>
                  <div className = 'link p-1 mb-1'>
                    <Link onClick = {e => {setMenuBarVisible(false); setPublicity(true)}}><PublicIcon/><span>Everyone</span></Link>
                  </div>
                  <div className = 'link p-1 mb-1'>
                    <Link onClick = {e => {setMenuBarVisible(false); setPublicity(false)}}><PeopleIcon/><span>People you follow</span></Link>
                  </div>
                </div>}
            </div>
            <button className = 'btn btn-primary btn-sm'>Tweet</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default TweetForm;