import { TextField, ListItem, ListItemText } from "@mui/material";
import useFetch from "../hooks/useFetch"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const SearchBar = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8080/blogs', {
        mode: 'no-cors',
      });

    const[searchQuery, setSearchQuery] = useState("")

    const handleChange = (text) => {
        setSearchQuery(text.target.value.toLowerCase())
    };

    const searchedNames = blogs?.blogs?.filter((text) => {
        return text.title.toLowerCase().includes(searchQuery);
    });

    return(
        <div>
        <TextField
            variant="filled"
            label="Search"
            onChange={handleChange}
            sx=
            {{
                width:600,
            }}
        />
        {searchQuery != "" && searchedNames.length > 0 && (
            searchedNames.map((name, index) => (
            <ListItem key={name.id}>
                <Link to={`/blogs/${name.id}`}>
                    <ListItemText primary={name.title}/>
                </Link>
            </ListItem>
            ))
        )}
        </div>
    )
}