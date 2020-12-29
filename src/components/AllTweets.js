import React from 'react';

const Tweet = props => {
  return (
    <p>Tweet Details<i className = 'far fa-person'></i></p>
  )
}
const AllTweets = props => {
  return (
    <React.Fragment>
      <Tweet/>
      <p>Return Some JSX</p>
    </React.Fragment>
  )
}
export default AllTweets;
