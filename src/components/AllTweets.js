import React from 'react';
import './tweets.css';
import {Link } from 'react-router-dom';
import {Refresh } from '@material-ui/icons';

const Tweet = props => {
  return (
    <div class = 'tweet'>
      {props.type === 'RT' && <Refresh/>}
      <p>{props.content}</p>
    </div>
  )
}
const AllTweets = props => {
  const [tweets, setTweets] = React.useState([{content: 'hello there'}, {content: 'cool stuff going on'}, {content: 'are you alright?'}]);
  const [filter, setFilter] = React.useState('Tweets')

  const filterTweets = e =>{
    setFilter(e.target.textContent);
    setTweets([...tweets].slice(1));
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
          {tweets.map(tweet => <Tweet  key = {tweet.content} content = {tweet.content}/>)}
        </div>
      </div>
    </React.Fragment>
  )
}
export default AllTweets;
