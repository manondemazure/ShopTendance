import React from 'react';
import PostForm from './components/PostForm'
import Post from './components/Post'
import {isEmpty} from './components/Utils'
import { useSelector } from 'react-redux';
import Navbar from "./components/Navbar"

const App = () => {
  const posts = useSelector((state) => state.postReducer);
  console.log(posts);

  return (
    <div className="App">
      <Navbar/>
      <PostForm/>
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) && posts.map((post, index) => (
          <Post post={post} key={index}/>))}
        </div>
      </div>
    </div>
  );
};

export default App;