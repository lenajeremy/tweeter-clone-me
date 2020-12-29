import React from 'react';
import TweetForm from '../components/TweetForm';

const Home = (props) =>{
  return(
    <React.Fragment>
    <div className = 'container'>
      <div className = 'row'>
        <div className = 'col col-md-8 pl-5'>
          <TweetForm/>
        </div>
        <div className = 'col col-md-4'>

        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
export default Home