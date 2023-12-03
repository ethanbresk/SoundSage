import { TextField, ListItem, ListItemText } from "@mui/material";
import useFetch from "../hooks/useFetch"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { getPosts } from '../utilities/backend_integration.js';

export const SearchBar = () => {
    const [isPending, setIsPending] = useState(true);
    const [blogs, setBlogs] = useState(0);

    useEffect(() => {
        getPosts(null)
        .then((res) => {
        setBlogs(res);
        setIsPending(false);
        })
    }, []);
    console.log(blogs)
=======
import { useTheme } from '@mui/system';

export const SearchBar = () => {
    const theme = useTheme()

    const { data: blogs, isPending, error } = useFetch('http://localhost:8080/getPosts', {
        mode: 'no-cors',
      });
>>>>>>> 0d708dc70c94bfd5d61f08ec2d267f5aa6ddf955

    const[searchQuery, setSearchQuery] = useState("")

    const handleChange = (text) => {
        setSearchQuery(text.target.value.toLowerCase())
    };

    const searchedNames = blogs?.blogs?.filter((text) => {
        return text.post_title.toLowerCase().includes(searchQuery);
    });

    return(
        <div>
        <TextField
            variant="filled"
            label="Search"
            onChange={handleChange}
            sx=
            {{
                top: 10,
                width:600,
                backgroundColor: "#EAF6FF"
            }}
        />
        {searchQuery != "" && searchedNames.length > 0 && (
            searchedNames.map((title, index) => (
            <ListItem key={title.user_id}>
                <Link to={`/blogs/${title.user_id}`}>
                    <ListItemText primary={title.post_title}/>
                </Link>
            </ListItem>
            ))
        )}
        </div>
    )
}