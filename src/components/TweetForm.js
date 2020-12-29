import React from 'react';
import './tweetform.css';

const TweetForm = () =>{
  const [textContent, setTextContent] = React.useState('');
  return(
    <div className = 'tweet_section mt-4'>
      <div className = 'tweet__form'>
        <p className = 'emphasis'>Tweet Something</p>
        <form action = 'things'>
          <div className = 'profile__image'></div>
          <textarea value = {textContent} onChange = {e=>setTextContent(e.target.value)}/>
        </form>
      </div>
    </div>
  )
}
export default TweetForm;