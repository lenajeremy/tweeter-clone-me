import React from 'react';
import './App.css';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Header from './components/Header';
import Bookmark from './routes/Bookmark';
import Login from './routes/Login';
import Register from './routes/Register';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

function App() {
  const headerVisible = useSelector(store => store.headerVisible);
  return (
    <div className="App">
      {headerVisible && <Header/>}
      <Route exact path = '/' component = {Home}/>
      <Route path = '/profile' component = {Profile}/>
      <Route path = '/bookmarks' component = {Bookmark}/>
      <Route path = '/login' component = {Login}/>
      <Route path = '/join' component = {Register}/>
    </div>
  );
}

export default App;
