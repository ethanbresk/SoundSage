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
import IconButton from '@mui/material/IconButton';



const BlogCollection = ({ blogs, title }) => {
  const theme = useTheme()
  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <div className='blog'>
              {blog.parent ? null :
                (
                  <Box style={{ width: 600, borderRadius: 20, backgroundColor: theme.palette.tertiary.main, padding: '15px', marginBottom: '20px' }} justifyContent= "center" alignItems= "center">
                  <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Avatar src={blog.user_picture} style={{ width: '80px', height: '80px', marginBottom: '5px' }}/>
                    <div style={{ marginLeft: '15px', textAlign: 'left', fontFamily: 'monospace' }}> {/*experiment with textalign center or left*/}
                      <Typography component="div" variant="h6" fontFamily={'monospace'} style={{ color: theme.palette.text.main}}>
                        {blog.post_title}
                      </Typography>
                      <Typography component="div" fontFamily={'monospace'} style={{ color: theme.palette.text.main}}>
                        By {blog.user_name}
                      </Typography>
                      <Typography component="div" variant="body1" fontFamily={'monospace'} style={{ color: theme.palette.text.main}}>
                        {blog.post_body}
                      </Typography>
                      <Link to={blog.song_url} style={{ width: '100%', textDecoration: 'none', textAlign: 'center' }}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                          <Card style={{ borderRadius: '10px', marginRight: '15px', marginTop: '20px', width: '90%', maxWidth: '500px', fontFamily: 'monospace' }}>
                            <Card.Img src={blog.song_pic} style={{ width: '100%', height: 'auto', borderRadius: '10px' }}/>
                            <Card.Body>
                              <Card.Title style={{fontFamily:'monospace'}}>{blog.song_name}</Card.Title>
                            </Card.Body>
                          </Card>
                        </div>
                      </Link>
                      <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                        <IconButton size="small" disabled><ThumbUpAltIcon fontSize="small" style={{ color: theme.palette.accentOne.main}} /></IconButton>
                        <Typography variant="body2" style={{ color: theme.palette.text.main}}>
                          {blog.num_of_likes}
                        </Typography>
                      </div>
                    </div>
                  </Link>
                  </Box>
                )
              }
          </div>
        </div>
      )).reverse()}
    </div>
  )
}

export default BlogCollection;