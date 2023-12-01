import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box } from '@mui/material'

const BlogCollection = ({ blogs, title }) => {
  console.log(blogs);

  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <div className='blog'>
          <Box
            backgroundColor= "#e8e8e8"
            style={{
              width: 600,
              borderRadius: 20,
            }}
            justifyContent= "center"
            alignItems= "center"
          >
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <p>{blog.song}</p>
                <p>Likes: {blog.likes}</p>
              </Link>
          </Box>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogCollection;