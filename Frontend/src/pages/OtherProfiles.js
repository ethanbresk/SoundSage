import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useTheme } from '@mui/system';
import { getUserData, getUser } from '../utilities/backend_integration.js';
import { Box, Button } from '@mui/material';
import { getPosts } from '../utilities/backend_integration.js';
import BlogCollection from '../components/BlogCollection';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const OtherProfiles = () => {
  const { user } = useParams();
  const [isPending, setIsPending] = useState(true);
  const [blogs, setBlogs] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme()

  useEffect(() => {
    getPosts(user)
    .then((res) => {
        console.log(res)
        setBlogs(res);
        console.log(blogs)
        setIsPending(false);
    })
    getUser(user)
      .then(data => {
        setData(data);
        console.log(data)
        setError(null);
      })
      .catch(error => {
        setData(null);
        setError(error);
      })
  }, []);


  
  const userDisplay = (data) => {
    const { username, total_likes, spotify_url, picture_url } = data;
    return (
      <div>
        <h1 className='page_header' style={{ fontFamily:'monospace', color: theme.palette.text.main}}>{username}'s Page</h1>
        <div style={{color: "theme.palette.text.main", textAlign: 'center'}}>
          <img src={picture_url} alt="Profile" width="100" height="100" position="static"
            style={{borderRadius: 1000, left:300,alignItems: 'center'}}></img>
          <h2 style={{paddingTop: "20px", paddingBottom: "15px"}}><a target="_blank" href={spotify_url} style={{fontFamily:'monospace', textDecoration:'none', fontSize: "20pt", color: theme.palette.text.main}}>
            <Button style={{ backgroundColor: theme.palette.accentOne.main, color: theme.palette.text.main}}>Spotify Page<OpenInNewIcon style={{paddingBottom: "1px", paddingLeft: "5px"}} fontSize="medium"/></Button></a>
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className='profile'>
      <Box
        position = "fixed"
        bottom = {0}
        width = "100%"
        style = {{ backgroundColor: theme.palette.secondary.main}}
        p={3}
        zIndex={2}
      />
      <div className="center">
      {data ? userDisplay(data) : <h1 style={{textAlign: 'center'}}>Login to Display Your Info!</h1>}
      <div className="blog_home" style = {{ height:415,overflowY: 'auto' }}>
        {isPending && <div>Loading...</div>}
        {blogs && <BlogCollection blogs={blogs.blogs} title="Kirt Blogs:" />}
        <Box style={{paddingTop:45}}></Box>
        </div>
    </div>
    </div>
  )
}

export default OtherProfiles;