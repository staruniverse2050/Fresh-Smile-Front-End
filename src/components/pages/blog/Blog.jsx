import React from "react";
import './Blog.css'



export const Blog = () => {
  return (
   
     
<div>
<div className="post-container">
        <div className="post">
          <img
            className="post-image"
            src="./public/cards4.jpg"
            alt=""
          />
          <div className="post-hover">
            <h2 className="post-hover-title">Hover</h2>
          </div>
        </div>
        <div className="post">
          <img
            className="post-image"
            src="./public/IMPLANTES-DENTALES.jpg"
            alt=""
          />
          <div className="post-hover">
            <h2 className="post-hover-title">Hover</h2>
          </div>
        </div>
        <div className="post">
          <img
            className="post-image"
            src="./public/instagram1.jpg"
            alt=""
          />
          <div className="post-hover">
            <h2 className="post-hover-title">Hover</h2>
          </div>
        </div>
      </div>
      </div>     
        
    
  );
};
