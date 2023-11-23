import { TextField, ListItem, ListItemText } from "@mui/material";
import useFetch from "../hooks/useFetch"
import React, { useState } from 'react'

export const SearchBar = () => {
    const dummyNames = [
        {
            "id": 1,
            "author": "Kirt"
        },
        {
            "id": 2,
            "author": "Erik"
        },
        {
            "id": 3,
            "author": "Ethan"
        },
        {
            "id": 4,
            "author": "Aaron"
        },
        {
            "id": 5,
            "author": "James"
        },
    ];

    const[searchQuery, setSearchQuery] = useState("")

    const handleChange = (text) => {
        setSearchQuery(text.target.value.toLowerCase())
    };

    const searchedNames = dummyNames.filter((names) => {
        return names.author.toLowerCase().includes(searchQuery);
    });

    return(
        <div>
        <TextField
            variant="outlined"
            label="Search"
            onChange={handleChange}
        />
        {searchQuery != "" && searchedNames.length > 0 && (
            searchedNames.map((name, index) => (
            <ListItem key={name.id}>
                <ListItemText primary={name.author}/>
            </ListItem>
            ))
        )}
        </div>
    )
}