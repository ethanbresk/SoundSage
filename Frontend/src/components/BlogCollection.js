import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box, Avatar} from '@mui/material'
import { useTheme } from '@mui/system';
import { getUser } from '../utilities/backend_integration.js';
import { Card } from 'react-bootstrap';
import Button from '@mui/material/Button';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Typography from '@mui/material/Typography';



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
              (
                <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Avatar src={blog.user_picture} style={{ margin: 'auto', marginTop: '15px' }} />

                  <div style={{ marginLeft: '15px' }}>
                    <Typography component="div" variant="body2" color="textSecondary">
                      <em>{blog.user_name}</em>
                    </Typography>
                    <Typography component="div" variant="h6" color="textPrimary">
                      {blog.post_title}
                    </Typography>
                    <Typography component="div" variant="body1" color="textPrimary">
                      {blog.post_body}
                    </Typography>
                    <Link to={blog.song_url} style={{ width: '100%' }}>
                      <Card>
                        <Card.Img src={blog.song_pic} />
                        <Card.Body>
                          <Card.Title>{blog.song_name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                    <div style={{ marginTop: '20px' }}>
                      <ThumbUpAltIcon fontSize="small" />
                      <span style={{ marginLeft: '5px' }}>{blog.num_of_likes}</span>
                    </div>
                  </div>
                </Link>
              )
            }
          </Box>
          </div>
        </div>
      )).reverse()}
    </div>
  )
}

export default BlogCollection;