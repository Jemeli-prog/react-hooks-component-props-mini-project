import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


function App() {
  return (
    <div className="App">
     <Header name = "Underreacted"/>
     <About about = "A blog about learning "/>
     <ArticleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;
