import React from 'react';
import {Refresh, ModeCommentOutlined, BookmarkBorderOutlined, FavoriteBorderOutlined, Image} from '@material-ui/icons';
import {Button} from '@material-ui/core';
import './tweets.css';

const CommentForm = props => {
  const [text, setText] = React.useState('');
  const [image, setImage] = React.useState(null);

  return (
    <div className = 'comment__form d-flex justify-content-between align-items-center'>
      <div className = 'profile__image'></div>
      <textarea className = 'faded' value = {text} onChange = {e => setText(e.target.value)} placeholder = "Tweet a reply"/>
      <Button variant = 'text' className = 'faded'><Image className = 'faded'/></Button>
    </div>
  )
}

const Tweet =({tweet}) => {
  const [liked, setLiked] = React.useState(tweet.isLiked);
  const [commented, setCommented] = React.useState(tweet.isCommented);
  const [bookmarked, setBookmarked] = React.useState(tweet.isBookmarked);
  const [retweet, setRetweet] = React.useState(tweet.isRetweeted);

  return (
    <React.Fragment>
      <div className = 'tweet p-4 mb-3'>
        {tweet.type === 'RT' && (
          <div className = 'faded small mb-2'>
          <Refresh/> Jeremiah Lena Retweeted*
          </div>
        )}
        <div className = 'tweet__header d-flex mb-3'>
          <div className = 'profile__image'></div>
          <div className ='name__time'>
            <p className = 'm-0 font-weight-bold'>Jeremiah Lena</p>
            <small><p className = 'm-0 faded'>24th March on 10:30AM</p></small>
          </div>
        </div>
        <p>{tweet.content}</p>
        {tweet.image ? 
        <div className = 'tweet__image' style = {{backgroundImage: `url(${tweet.image})`}}>

        </div>: ''}
        <div className = 'faded small ml-auto d-flex justify-content-between w-55 mt-2'>
          <p>449 Comments</p>
          <p>41K Retweets</p>
          <p>234 Saved</p>
        </div>
        <div className = 'tweet__action d-flex px-3 justify-content-around'>
          <div className = 'tweet__comment__link' id = 'comment'>
            <Button variant = 'text' onClick = {e => setCommented(!commented)} className = {commented && 'active'}>
            <ModeCommentOutlined/> Comment
            </Button>
          </div>
          <div className = 'tweet__comment__link' id = 'retweet'>
          <Button variant = 'text' onClick = {e => setRetweet(!retweet)} className = {retweet && 'active'}>
            <Refresh/> {retweet ? 'Retweeted' : 'Retweets'}
            </Button>
          </div>
          <div className = 'tweet__comment__link' id = 'like'>
          <Button variant = 'text' onClick = {e => setLiked(!liked)} className = {liked && 'active'}>
            <FavoriteBorderOutlined/>  {liked ? 'Liked' : 'Likes'}
            </Button>
          </div>
          <div className = 'tweet__comment__link' id = 'bookmarked'>
          <Button variant = 'text' onClick = {e => setBookmarked(!bookmarked)} className = {bookmarked && 'active'}>
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