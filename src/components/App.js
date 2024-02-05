import React from "react";
import blogData from "../data/blog.js";
import Header from './Header';
import About from './About';
import ArticleList from "./ArticleList.js";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header blogName={blogData.name} />
      <About logoUrl={blogData.image} bloglogo= "https://via.placeholder.com/215Links " />
      <ArticleList articles={blogData.posts}/>
     
    </div>
  );
}

export default App;
