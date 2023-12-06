import { TextField, ListItem, ListItemText, ListItemButton, Box } from "@mui/material";
import useFetch from "../hooks/useFetch"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/system';
import { getPosts } from '../utilities/backend_integration.js';

export const SearchBar = () => {
  const [isPending, setIsPending] = useState(true);
  const [blogs, setBlogs] = useState(0);
  const theme = useTheme();

    useEffect(() => {
        getPosts(null)
        .then((res) => {
        setBlogs(res);
        setIsPending(false);
        })
    }, []);
    console.log(blogs)

    const[searchQuery, setSearchQuery] = useState("")

  const handleChange = (text) => {
    setSearchQuery(text.target.value.toLowerCase());
  };

  const searchedNames = blogs?.blogs?.filter((text) => {
    return text.post_title.toLowerCase().includes(searchQuery);
  });

  return (
    <div>
      <TextField
        variant="filled"
        label="Search Posts"
        onChange={handleChange}
        color="accentOne"
        sx={{
          top: 10,
          width: 600,
        }}
        style={{
          borderRadius: 10,
          backgroundColor: "white",
          marginBottom:10,
        }}
        autoComplete="off" 
      />
      {searchQuery != "" &&
        searchedNames?.length > 0 &&
        searchedNames.map((title, index) => (
          <Link style={{fontFamily: 'monospace', textAlign:'center', textDecoration:'none'}} to={`/blogs/${title._id}`}>
          <ListItemButton key={title.user_id} style={{ borderRadius: 15, marginTop: 3, fontFamily: 'monospace', backgroundColor: theme.palette.tertiary.main, color: theme.palette.text.main}}>
              <ListItemText style={{ fontFamily: 'monospace', textAlign:'center'}} primary={title.post_title} />
          </ListItemButton>
          </Link>
        ))
        }
      {searchQuery != "" &&
        searchedNames?.length === 0 &&
        <ListItemButton key={0} style={{fontFamily: 'monospace'}}>
          <ListItemText style={{fontFamily:'monospace', textAlign:'center'}}primary={<div style={{textDecoration:'none', color: theme.palette.text.main}}>No posts found.</div>} />
        </ListItemButton>
      }
    </div>
  );
};
