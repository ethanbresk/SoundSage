import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';

const BlogPage = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8080/getPosts/' + id);
    const navigate = useNavigate();
    const theme = useTheme()

    const handleClick = () => {
        fetch('http://localhost:8080/getPosts/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="blog-details">
            <Box
                position = "fixed"
                bottom = {0}
                width = "100%"
                style = {{ backgroundColor: theme.palette.accentTwo.main}}
                p={3}
            />
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p>Written by {blog.author} </p>
                    <div>{blog.body}</div>
                    <p>{blog.song}</p>
                    <p>Likes: {blog.likes}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogPage;