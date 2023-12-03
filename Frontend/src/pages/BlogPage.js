import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';

const BlogPage = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8080/getPosts');
    const navigate = useNavigate();
    const theme = useTheme()
    const [likes,setLikes] = useState(blog?.blogs[0].likes);

    const handleClick = () => {
        fetch('http://localhost:8080/getPosts', {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    const handleLike = () => {
        //const blog = blog?.blogs[0].id
        setLikes(likes + 1)

        //fetch('http://localhost:8080/getPosts', {
        //    method: 'LIKE'
        //}).then(() => {
        //    
        //})
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
                    <h2> {blog.blogs[0].title} </h2>
                    <p>Written by {blog.blogs[0].author} </p>
                    <div>{blog.blogs[0].body}</div>
                    <p>{blog.blogs[0].song}</p>
                    <button onClick={handleLike}> Likes: {blog.blogs[0].likes}</button>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogPage;