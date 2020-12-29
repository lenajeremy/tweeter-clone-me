import React from 'react';
import './tweets.css';
import {Link } from 'react-router-dom';
// import {Refresh, ModeCommentOutlined, BookmarkBorderOutlined, FavoriteBorderOutlined} from '@material-ui/icons';
import {Refresh} from '@material-ui/icons';
import post1 from '../postimages/4.jpeg';
import post2 from '../postimages/5.jpeg';

const Tweet =({tweet}) => {
  return (
    <React.Fragment>
      {tweet.type === 'RT' && (
        <div className = 'faded small'>
        <Refresh/> Jeremiah Lena Retweeted*
        </div>
      )}
      <div className = 'tweet p-4 mb-5'>
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
        <div className = 'faded small ml-auto d-flex justify-content-between w-50 mt-1'>
          <p>449 Comments</p>
          <p>41K Retweets</p>
          <p>234 Saved</p>
        </div>
      </div>
    </React.Fragment>
  )
}
const AllTweets = props => {
  //eslint-disable-next-line
  const [tweets, setTweets] = React.useState(
    [{
      content: 'Travelling - it leaves you speechless, then turns you into a storyteller.', 
      type: 'RT', 
      image: post1
    }, {
      content: 'cool stuff going on'
    }, {
      content: 'For you are a new creature... Old things have passed away. BEHOLD!!! All things are becoming new!!🌍🌏', 
      type: 'RT', 
      image: post2}
    ]);
  const [filter, setFilter] = React.useState('Tweets')

  const filterTweets = e =>{
    setFilter(e.target.textContent);
  }
  return (
    <React.Fragment>
      <div className = 'tweets__area d-flex'>
        <div className = 'tweets__sort'>
          <ul className = 'list-unstyled'>
            <li><Link onClick = {filterTweets} to = '/profile' className = {`emphasis faded ${filter === 'Tweets' && 'active'}`}>Tweets</Link></li>
            <li><Link onClick = {filterTweets} to = '/profile' className = {`emphasis faded ${filter === 'Tweets & Replies' && 'active'}`}>Tweets & Replies</Link></li>
            <li><Link onClick = {filterTweets} to = '/profile' className = {`emphasis faded ${filter === 'Media' && 'active'}`}>Media</Link></li>
            <li><Link onClick = {filterTweets} to = '/profile' className = {`emphasis faded ${filter === 'Likes' && 'active'}`}>Likes</Link></li>
          </ul>
        </div>    
        <div className = 'tweets'>
          {tweets.map(tweet => <Tweet key = {tweet.content} tweet = {tweet}/>)}
        </div>
      </div>
    </React.Fragment>
  )
}
export default AllTweets;
