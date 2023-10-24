import React from 'react';
import PostForm from './components/PostForm';
import Post from './components/Post';
import { isEmpty } from './components/Utils';
import { useSelector} from 'react-redux';
import Navbar from "./components/Navbar";


const App = () => {
  const posts = useSelector((state) => state.postReducer);
  const selectedCategory = useSelector((state) => state.selectedCategory);
 
  const filteredPosts = selectedCategory === 'all'
  ? posts
  : posts.filter(post => post.categories.includes(selectedCategory));

  return (
    <div className="App">
      <Navbar/>
      <PostForm/>

      <div className="content">
        <div className="post-container">
        {!isEmpty(filteredPosts) && filteredPosts.map((post, index) => (
          <Post post={post} key={index}/>))}
        </div>
      </div>
    </div>
  );
};

export default App;