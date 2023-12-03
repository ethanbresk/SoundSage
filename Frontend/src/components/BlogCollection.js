import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box } from '@mui/material'
import { useTheme } from '@mui/system';

const BlogCollection = ({ blogs, title }) => {
  console.log(blogs);
  blogs.reverse()
  const theme = useTheme()

  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <div className='blog'>
          <Box
            style={{
              width: 600,
              borderRadius: 20,
              backgroundColor: theme.palette.tertiary.main
            }}
            justifyContent= "center"
            alignItems= "center"
          >
              <Link to={`/blogs/${blog._id}`}>
                <p style={{textAlign: 'left', paddingLeft: 15, paddingTop: 5}}><em>{blog.user_name}</em></p>
                <h2 style={{color: theme.palette.text.main}}>{blog.post_title}</h2>
                <p>{blog.song_url}</p>
                <p style={{textAlign: 'right', paddingRight: 15, paddingBottom: 5}}>Likes: <b>{blog.num_of_likes}</b></p>
              </Link>
          </Box>
          </div>
        </div>
      )).reverse()}
    </div>
  )
}

export default BlogCollection;