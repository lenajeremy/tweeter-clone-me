import React from 'react';
import {Link} from 'react-router-dom';


const TweetFilter = () => {
  const [filter, setFilter ] = React.useState('Tweets');
  const filterTweets = e => {
    setFilter(e.target.textContent);
  }
  return (
    <div className = 'tweets__sort'>
    <ul className = 'list-unstyled'>
      <li><Link onClick = {filterTweets} to = '/profile' className = {`emphasis faded ${filter === 'Tweets' && 'active'}`}>Tweets</Link></li>
      <li><Link onClick = {filterTweets} to = '/profile' className = {`emphasis faded ${filter === 'Tweets & Replies' && 'active'}`}>Tweets & Replies</Link></li>
      <li><Link onClick = {filterTweets} to = '/profile' className = {`emphasis faded ${filter === 'Media' && 'active'}`}>Media</Link></li>
      <li><Link onClick = {filterTweets} to = '/profile' className = {`emphasis faded ${filter === 'Likes' && 'active'}`}>Likes</Link></li>
    </ul>
  </div>    
  )
}
export default TweetFilter;