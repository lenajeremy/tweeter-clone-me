/* eslint-disable no-unused-vars */

import React from 'react';
import TweetFilter from '../components/TweetFilter';
import {useDispatch,useSelector} from 'react-redux';
import Tweet from '../components/Tweet';
import post1 from '../postimages/4.jpeg';
import post2 from '../postimages/5.jpeg';
import {colorChange} from '../actions';


const Bookmark = props => {
  const dispatch = useDispatch();
  const colorPalette = useSelector(store => store.colorPalette);
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
    <label htmlFor = '#special_color_gear'>Change Special Color
          <input id = 'special_color_gear' type = 'color' onChange = {e => dispatch(colorChange('special', e.target.value))} value = {colorPalette.special}/>
        </label>
        <label htmlFor = '#background_color_gear'>Change Background Color
          <input id = 'background_color_gear' type = 'color' onChange = {e => dispatch(colorChange('background', e.target.value))} value = {colorPalette.background}/>
        </label>
        <label htmlFor = '#text_color_gear'>Change Text Color
          <input id = 'text_color_gear' type = 'color' onChange = {e => dispatch(colorChange('text', e.target.value))} value = {colorPalette.text}/>
        </label>
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