import React from 'react';
import './App.css';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Header from './components/Header';
import Bookmark from './routes/Bookmark';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path = '/' component = {Home}/>
      <Route path = '/profile' component = {Profile}/>
      <Route path = '/bookmarks' component = {Bookmark}/>
    </div>
  );
}

export default App;
