/* eslint-disable no-unused-vars */

import React from 'react';
import UserProfile from '../components/UserProfile';
import TweetFilter from '../components/TweetFilter';
import Tweet from '../components/Tweet';
import post1 from '../postimages/4.jpeg';
import post2 from '../postimages/5.jpeg';
import {useSelector} from 'react-redux';

const Profile = props => {
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
  const colorPalette = useSelector(store => store.colorPalette);

  return (
    <React.Fragment>
      <div className = 'profile'>
        <div className = 'cover__picture'></div>
        <UserProfile/>
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
export default Profile;