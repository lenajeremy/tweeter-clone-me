import React from 'react';
import './profile.css';
import {PersonAdd} from '@material-ui/icons';

const  UserProfile = props =>{
  return (
    <div class = 'profile__details p-4 d-flex justify-content-between align-items-start'>
      <div className = 'd-flex'>
        <div className = 'profile__image large__profile__image'></div>
        <div>
          <div className = 'user__details mb-2 d-flex justify-content-between'>
            <div className = 'details d-flex justify-content-between'>
              <h3 className = 'username'>Jeremiah Lena</h3>
              <div className = 'd-flex'>
              <p className= 'emphasis m-0 small'>2596 <span className = 'faded'>Following</span></p>
              <p className = 'm-0 emphasis small'>10.8K <span className = 'faded'>Followers</span></p>
              </div>
            </div>
          </div>
          <div className = 'faded bio'>Photographer & Filmmaker based in Copenhagen, Denmark<span role = 'img' aria-labelledby='emoji'>🎅🌍🌏</span>. Email me @ jeremiahlena13@gmail.com🌈🌈</div>
        </div>
      </div>
      <button className = 'btn btn-primary btn-sm centered'><PersonAdd/>Follow</button>
    </div>
  )
}
export default UserProfile;