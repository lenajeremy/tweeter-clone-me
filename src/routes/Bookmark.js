import React from 'react';
import TweetFilter from '../components/TweetFilter';
import Tweet from '../components/Tweet';
import post1 from '../postimages/4.jpeg';
import post2 from '../postimages/5.jpeg';

const Bookmark = props => {
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

  return (
    <React.Fragment>
    <div  className = 'mt-4'>
      <div className = 'tweets__area d-flex'>
          <TweetFilter/>
        <div className = 'tweets'>
          {tweets.map(tweet => <Tweet key = {tweet.content} tweet = {tweet}/>)}
        </div>
    </div>
    </div>
    </React.Fragment>
  )
}
export default Bookmark;