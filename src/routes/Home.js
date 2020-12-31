import React from 'react';
import TweetForm from '../components/TweetForm';
import Tweet from '../components/Tweet';
import post1 from '../postimages/4.jpeg';
import post2 from '../postimages/5.jpeg';
import post3 from '../postimages/6.png';
import post4 from '../postimages/3.jpeg'
import post5 from '../postimages/12.jpeg'
import post6 from '../postimages/10.jpeg';

const SuggestedFollows = props => {
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
          <button className = 'btn btn-sm btn-primary'>Follow</button>
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
          <button className = 'btn btn-sm btn-primary'>Follow</button>
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
          <button className = 'btn btn-sm btn-primary'>Follow</button>
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
  const [tweets, setTweets] = React.useState(
    [
      {
        content: "For this life, my guy, make sure you enjoy yourself ooo... Because if you die lasan, na 3 months them go take remember you oooo... No go lose guard",
        image: post4,
        isLiked: true,
        isRetweeted: true,
        isBookmarked: true
      },
      {
        content: "Lord, we lift up your name... With out hearts full of praise... Be exalted Oh Lord, my God... Hosanna in the Highest",
        image: post6,
        isRetweeted: true,
        isBookmarked: true
      },
      {
        content: "Dont forget to talk to your father every morning... because He is the master of the universe and He has everything in His hands",
        image: post5,
        isRetweeted: true,
        isCommented: true
      },
      {
        content: "The Year has ended🌈🌈. What are your plans for the new year? Something good is coming in this new year.",
        image: post3,
        isLiked: true,
        isRetweeted: true
      },
      {
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
  return(
    <React.Fragment>
    <div className = 'w-75 mt-2 mx-auto'>
      <div className = 'row'>
        <div className = 'col col-md-8 pl-5'>
          <TweetForm/>
          {tweets.map(tweet => <Tweet tweet = {tweet}/>)}
        </div>
        <div className = 'col col-md-4'>
          <Trends/>
          <SuggestedFollows/>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
export default Home