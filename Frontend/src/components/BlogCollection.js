import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const BlogCollection = ({ blogs, title }) => {
  console.log(blogs);
  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <p>{blog.song}</p>
            <p>Likes: {blog.likes}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogCollection;