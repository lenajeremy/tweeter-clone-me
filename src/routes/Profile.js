import React from 'react';
import AllTweets from '../components/AllTweets';
import UserProfile from '../components/UserProfile';
const Profile = props => {
  return (
    <React.Fragment>
      <div className = 'profile'>
        <div className = 'cover__picture'></div>
        <UserProfile/>
        <AllTweets/>
      </div>
    </React.Fragment>
  )
}
export default Profile;