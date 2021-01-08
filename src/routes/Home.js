import React from 'react';
import TweetForm from '../components/TweetForm';
import Tweet from '../components/Tweet';
import post1 from '../postimages/4.jpeg';
import post2 from '../postimages/5.jpeg';
import post3 from '../postimages/6.png';
import post4 from '../postimages/3.jpeg'
import post5 from '../postimages/12.jpeg'
import post6 from '../postimages/10.jpeg';
import macbook from '../postimages/13.jpeg';
import {useDispatch, useSelector} from 'react-redux';
import {setHeaderVisibility, colorChange} from '../actions';

const SuggestedFollows = props => {
  const colorPalette = useSelector(store => store.colorPalette);
  return (
    <React.Fragment>
    <p className = 'emphasis small'>Who to Follow?</p>
    <div className = 'following__suggestion p-3'>
      <div className = 'suggestion mb-4'>
        <div className = 'd-flex justify-content-between align-items-center'>
          <div className = 'd-flex align-items-center'>
          <div className = 'profile__image mr-3'></div>
          <div>
            <div className = 'username'>Jeremiah Lena</div>
            <div className = 'faded small'>20K Followers</div>
          </div>
          </div>
          <button className = 'btn btn-sm' style = {{background: colorPalette.special}}>Follow</button>
        </div>
      </div>
      <div className = 'suggestion mb-4'>
        <div className = 'd-flex justify-content-between align-items-center'>
          <div className = 'd-flex align-items-center'>
          <div className = 'profile__image mr-3' style = {{backgroundImage: `url(${post1})`}}></div>
          <div>
            <div className = 'username'>Steph Crown</div>
            <div className = 'faded small'>1.4K Followers</div>
          </div>
          </div>
          <button className = 'btn btn-sm' style = {{background: colorPalette.special}}>Follow</button>
        </div>
      </div>
      <div className = 'suggestion last'>
        <div className = 'd-flex justify-content-between align-items-center'>
          <div className = 'd-flex align-items-center'>
          <div className = 'profile__image mr-3' style = {{backgroundImage: `url(${post5})`}}></div>
          <div>
            <div className = 'username'>AbdulQudus Aq</div>
            <div className = 'faded small'>2.7K Followers</div>
          </div>
          </div>
          <button className = 'btn btn-sm' style = {{background: colorPalette.special}}>Follow</button>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
const Trends = props => {
  return (
  <div className = 'my-4'>
    <p className = 'emphasis small'>Trends for you</p>
    <div className = 'trends p-3 mb-4'>
    <div className = 'trend'>
      <p className = 'hashtag emphasis mb-1'>#Davido</p>
      <p className = 'small faded'>19.1K Tweets</p>
    </div>
    <div className = 'trend'>
      <p className = 'hashtag emphasis mb-1'>#Christmas</p>
      <p className = 'small faded'>2.5K Tweets</p>
    </div>
    <div className = 'trend'>
      <p className = 'hashtag emphasis mb-1'>#Chike</p>
      <p className = 'small faded'>1095 Tweets</p>
    </div>
    <div className = 'trend'>
      <p className = 'hashtag emphasis mb-1'>#ENDSARS</p>
      <p className = 'small faded'>105K Tweets</p>
    </div>
    <div className = 'trend'>
      <p className = 'hashtag emphasis mb-1'>#programming</p>
      <p className = 'small faded'>105K Tweets</p>
    </div>
    </div>
  </div>
  )
}
const Home = (props) =>{
  const dispatch = useDispatch();
  const [tweets, setTweets] = React.useState([]);
  const colorPalette = useSelector(store => store.colorPalette);
  dispatch(setHeaderVisibility(true));

  return(
    <React.Fragment>
    <div className = 'w-75 mt-2 mx-auto'>
      <div className = 'row'>
        <div className = 'col-12 col-md-8 pl-5'>
          <TweetForm setTweets = {setTweets} images = {[post1, post2, post3, post4, post5, post6, macbook]}/>
          {tweets.map(tweet => <Tweet tweet = {tweet} key = {tweet.content}/>)}
        </div>
        <div className = 'col-12 col-md-4'>
        <label for = '#special_color_gear'>Change Special Color
          <input id = 'special_color_gear' type = 'color' onChange = {e => dispatch(colorChange('special', e.target.value))} value = {colorPalette.special}/>
        </label>
        <label for = '#background_color_gear'>Change Background Color
          <input id = 'background_color_gear' type = 'color' onChange = {e => dispatch(colorChange('background', e.target.value))} value = {colorPalette.background}/>
        </label>
        <label for = '#text_color_gear'>Change Text Color
          <input id = 'text_color_gear' type = 'color' onChange = {e => dispatch(colorChange('text', e.target.value))} value = {colorPalette.text}/>
        </label>
          <Trends/>
          <SuggestedFollows/>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
export default Home