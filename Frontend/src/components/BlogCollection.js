import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box } from '@mui/material'
import { useTheme } from '@mui/system';
import { getUser } from '../utilities/backend_integration.js';
import { Card } from 'react-bootstrap';



const BlogCollection = ({ blogs, title }) => {
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
            {blog.parent ? null :
              (<Link to={`/blogs/${blog._id}`}>
                <div style={{color: theme.palette.text.main, textAlign: 'left', display: 'flex', alignItems: 'center'}}>
                  <img src={blog.user_picture} width="100" height="100" style={{borderRadius:1000, padding:15}}></img>
                  <p style={{textAlign: 'center'}}><em>{blog.user_name}</em></p>
                  <Link to={blog.song_url}>
                    <Card style={{borderRadius:1000}}>
                      <Card.Img src={blog.song_pic} style={{maxWidth:"100px", maxHeight:"100px", borderRadius:1000}}/>
                    </Card>
                  </Link>
                </div>
                <h2 style={{color: theme.palette.text.main}}>{blog.post_title}</h2>
                <p>{blog.post_body}</p>
                <p style={{textAlign: 'right', paddingRight: 15, paddingBottom: 5}}>Likes: <b>{blog.num_of_likes}</b></p>
              </Link>)
            }
          </Box>
          </div>
        </div>
      )).reverse()}
    </div>
  )
}

export default BlogCollection;