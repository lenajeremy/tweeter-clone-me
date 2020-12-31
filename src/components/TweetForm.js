import React from 'react';
import './tweetform.css';
import PublicIcon from '@material-ui/icons/Public';
import ImageIcon from '@material-ui/icons/Image';

const TweetForm = () =>{
  const [textContent, setTextContent] = React.useState('');
  return(
    <div className = 'tweet_section my-4'>
      <p className = 'emphasis small'>Tweet Something</p>
      <form action = 'things' className = 'tweet__form p-3 d-flex'>
        <div className = 'profile__image'></div>
        <div className = 'others w-100'>
          <textarea className = 'mb-3 w-100' value = {textContent} onChange = {e=>setTextContent(e.target.value)} placeholder = {'What\'s Happening'}/>
          <div className = 'tweet__create__actions small font-weight-bold d-flex justify-content-between'>
            <div className = 'd-flex'>
              <div className = 'image mr-3'><ImageIcon/></div>
              <div className = 'privacy'><PublicIcon/> Who can reply?</div>
            </div>
            <button className = 'btn btn-primary btn-sm'>Tweet</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default TweetForm;