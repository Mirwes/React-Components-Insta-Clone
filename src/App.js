/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import LikeSection from "./components/PostsContainer/LikeSection";
import Post from "./components/PostsContainer/PostsPage";
import postHeader from "./components/PostsContainer/PostHeader";
// import PostsPage from "./components/PostsContainer/PostsPage";
// import the PostsPage and SearchBar and add them to the App


const App = () => {

  return (
    <div className="App">
      <SearchBar />
      <postHeader />
      <Post />
     
      <LikeSection />
      {/* Add imported components here to render them */}

    </div>
  );
};

export default App;
