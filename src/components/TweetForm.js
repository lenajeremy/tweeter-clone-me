/* eslint-disable no-unused-vars */

import React, {useRef, useEffect} from 'react';
import './tweetform.css';
import PublicIcon from '@material-ui/icons/Public';
import ImageIcon from '@material-ui/icons/Image';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { useSelector, useDispatch } from 'react-redux';

const TweetForm = ({ images }) => {
  const user = useSelector(store => store.user);
  const [textContent, setTextContent] = React.useState('');
  const [image, setImage] = React.useState(null);
  const [publicity, setPublicity] = React.useState(true);
  const [menuBarVisible, setMenuBarVisible] = React.useState(false);
  const [posting, setPosting] = React.useState(false);
  const palette = useSelector(store => store.colorPalette);
  const dispatch = useDispatch();
  const menuBarVisibleRef = useRef(menuBarVisible);
  const publicityOpenerRef = useRef();

  function listener(e){
    setMenuBarVisibleRef(false);
    console.log(menuBarVisibleRef.current);
  }

  useEffect(() => {
    document.body.addEventListener('click', listener);
    return () => document.body.removeEventListener('click', listener);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function setMenuBarVisibleRef(value){
    menuBarVisibleRef.current = value;
    setMenuBarVisible(value);
  };

  const handleFormSubmission = e => {
    let devmode = true; // change this when setting to production
    e.preventDefault();

    //structure the tweet details
    const tweet = { content: textContent, image: devmode ? images[Math.floor(Math.random() * images.length)] : image, public: publicity, likes: 0, saves: 0, retweets: 0, comments: [], id: 0, timeCreated: Date.now() }

    // if there is an image, post the tweet image to the database, and then get the url for the image



    //then make a request to the firestore and save the tweet alongside the url for the image


    dispatch({ type: 'newPost', payload: tweet });
    //after getting the response, set update the necessary thihngs
    setTextContent('');
  }


  return (
    <div className='tweet_section my-3 my-lg-4'>
      <p className='small emphasis'>Tweet Something</p>
      <form action='things' className='tweet__form p-2 p-lg-3 d-flex' onSubmit={handleFormSubmission}>
        <div className='profile__image'></div>
        <div className='others w-100 d-flex'>
          <textarea className='mb-3 w-100' value={textContent} onChange={e => setTextContent(e.target.value)} placeholder={'What\'s Happening'} style={{ background: palette.background, color: palette.text }} />
          {/*<div className = 'textarea mb-3 w-100' contentEditable = 'true'></div>*/}
          <div className='tweet__create__actions small d-flex justify-content-between' style={{ color: palette.special }}>
            <div className='d-flex small'>
              <div className='image mr-2'>
                <ImageIcon />
                <input type='file' accept='image/*' multiple onChange={e => setImage(e.target.files)} />
              </div>
              <div className='privacy' ref = {publicityOpenerRef} onClick={e => setMenuBarVisibleRef(!menuBarVisible)}>{publicity ? <React.Fragment><PublicIcon /> Everyone can reply?</React.Fragment> : <React.Fragment><PeopleIcon /> People you follow</React.Fragment>}</div>
              {menuBarVisibleRef.current &&
                <div className='setPublicity profile__menu p-2 p-lg-3'>
                  <div className='title mb-2'>
                    <div className='text-dark emphasis'>Who can reply?</div>
                    <div className='faded small'>Who can reply this tweet</div>
                  </div>
                  <div className='link p-1 mb-1'>
                    <Link onClick={e => { setMenuBarVisible(false); setPublicity(true) }}><PublicIcon /><span>Everyone</span></Link>
                  </div>
                  <div className='link p-1 mb-1'>
                    <Link onClick={e => { setMenuBarVisible(false); setPublicity(false) }}><PeopleIcon /><span>People you follow</span></Link>
                  </div>
                </div>}
            </div>
            <button style={{ background: palette.special }} disabled={!textContent || textContent.length > 250} className='btn btn-sm'>Tweet</button>
            {textContent.length}
          </div>
        </div>
      </form>
    </div>
  )
}


export default TweetForm;