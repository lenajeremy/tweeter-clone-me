/* eslint-disable no-unused-vars */
/* eslint-disable no-extend-native */
import React from 'react';
import {Refresh, ModeCommentOutlined, BookmarkBorderOutlined, FavoriteBorderOutlined, Image} from '@material-ui/icons';
import {Button} from '@material-ui/core';
import {useSelector} from 'react-redux';
import useTweetParser from '../hooks/useTweetParser';
import './tweets.css';

const CommentForm = props => {
  const [text, setText] = React.useState('');
  const [image, setImage] = React.useState(null);
  const colorPalette = useSelector(store => store.colorPalette);

  return (
    <div className = 'comment__form d-flex justify-content-between align-items-center'>
      <div className = 'profile__image'></div>
      <textarea style ={{background: colorPalette.background}} className = 'faded' value = {text} onChange = {e => setText(e.target.value)} placeholder = "Tweet a reply"/>
      <Button variant = 'text' className = 'faded'><Image className = 'faded'/></Button>
    </div>
  )
}

const Tweet =({tweet}) => {
  const [liked, setLiked] = React.useState(tweet.isLiked);
  const [commented, setCommented] = React.useState(tweet.isCommented);
  const [bookmarked, setBookmarked] = React.useState(tweet.isBookmarked);
  const [retweet, setRetweet] = React.useState(tweet.isRetweeted);
  const parser = useTweetParser();
  const colorPalette = useSelector(store => store.colorPalette);

Date.prototype.generateAppropriateString  = function (){
    let date = this
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let string = '';
    const generateDay = day => {
      let endDayChar = day[day.length - 1];
      return endDayChar === '1' ? day + 'st' : endDayChar === '2' ? day + 'nd' : endDayChar === '3' ? day + 'rd' : day + 'th';

    }
    let day = generateDay(date.getDate().toString());
    const dayOrNight = date => date >= 12 ? 'PM' : "AM";
    return day + ' ' + months[date.getMonth()] + ' on ' + (date.getHours() > 12 ? date.getHours()%12 : Number(date.getHours()) + ':' + date.getMinutes().toString().padStart(2, '0') + dayOrNight(date.getHours()));
  }
  return (
    <React.Fragment>
      <div className = 'tweet p-3 p-lg-4 mb-3'>
        {tweet.type === 'retweet' && (
          <div className = 'faded small mb-2'>
          <Refresh/> Jeremiah Lena Retweeted*
          </div>
        )}
        <div className = 'tweet__header d-flex mb-3'>
          <div className = 'profile__image'></div>
          <div className ='name__time'>
            <p className = 'm-0 font-weight-bold'>Jeremiah Lena</p>
            <small><p className = 'm-0 faded'>{new Date(tweet.timeCreated).generateAppropriateString()}</p></small>
          </div>
        </div>
        <p>{parser(tweet.content)}</p>
        {tweet.image ? 
        <div className = 'tweet__image' style = {{backgroundImage: `url(${tweet.image})`}}>

        </div>: ''}
        <div className = 'faded small ml-auto d-flex justify-content-end mt-2'>
          <p class = 'mr-2'>{tweet.likes} comments</p>
          <p class = 'mr-2'>{tweet.retweets} retweets</p>
          <p class = 'mr-0'>{tweet.saves} saved</p>
        </div>
        <div className = 'tweet__action d-flex px-3 justify-content-around' style = {{color: colorPalette.text}}>
          <div className = 'tweet__comment__link' id = 'comment'>
            <Button variant = {commented ? 'contained' : 'text'} color = {commented ? 'primary' : 'default'} onClick = {e => setCommented(!commented)}style = {{background: commented && colorPalette.special}}>
            <ModeCommentOutlined/> Comment
            </Button>
          </div>
          <div className = 'tweet__comment__link' id = 'retweet'>
          <Button variant = {retweet ? 'contained' : 'text'} color = {retweet ? 'primary' : 'default'} onClick = {e => setRetweet(!retweet)} style = {{background: retweet && colorPalette.special}}>
            <Refresh/> {retweet ? 'Retweeted' : 'Retweets'}
            </Button>
          </div>
          <div className = 'tweet__comment__link' id = 'like'>
          <Button variant = {liked ? 'contained' : 'text'} color = {liked ? 'primary' : 'default'} onClick = {e => setLiked(!liked)} style = {{background: liked && colorPalette.special}}>
            <FavoriteBorderOutlined/>  {liked ? 'Liked' : 'Likes'}
            </Button>
          </div>
          <div className = 'tweet__comment__link' id = 'bookmarked'>
          <Button variant = {bookmarked ? 'contained' : 'text'} color = {bookmarked ? 'primary' : 'default'} onClick = {e => setBookmarked(!bookmarked)} style = {{background: bookmarked && colorPalette.special}}>
            <BookmarkBorderOutlined/> Saved
            </Button>
          </div>
        </div>
        <CommentForm/>
      </div>
    </React.Fragment>
  )
}

export default Tweet;