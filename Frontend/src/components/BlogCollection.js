import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box } from '@mui/material'
import { useTheme } from '@mui/system';
import { getUser } from '../utilities/backend_integration.js';


const BlogCollection = ({ blogs, title }) => {
  const [mapState, setMapState] = useState(new Map());
  const updateMap = (key, value) => {
    setMapState(map => new Map(map.set(key, value)));
  }

  useEffect(() => {
    for (var i = 0; i < blogs.length-1; i++) {
      getUser(blogs[i].user_id)
      .then((res) => {
        console.log(blogs[i].user_id)
        updateMap(blogs[i].user_id, res.picture_url)
      })
    }
    
  }, [])

  console.log('TEST RES --------- ', mapState)
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
                <img src={mapState.get(blog.user_id)} width="100" height="100"></img>
                <p style={{textAlign: 'left', paddingLeft: 15, paddingTop: 5}}><em>{blog.user_name}</em></p>
                <h2 style={{color: theme.palette.text.main}}>{blog.post_title}</h2>
                <p>{blog.post_body}</p>
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