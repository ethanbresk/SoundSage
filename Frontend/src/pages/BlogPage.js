import { useNavigate, useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';
import { getPost, addLike } from '../utilities/backend_integration.js';

const BlogPage = () => {
    const { id } = useParams();
    
    const [isPending, setIsPending] = useState(true);
    const [blog, setBlog] = useState(0);
    const navigate = useNavigate();
    const theme = useTheme()
    const [likes,setLikes] = useState(0);

    //console.log(id)
    useEffect(() => {
        console.log('id:' + id)
        getPost(id)
        .then((res) => {
            //console.log(res)
            setBlog(res)
            setLikes(res.num_of_likes)
            setIsPending(false)
            console.log('blogLikes' + blog)
        })
    }, []);

    //console.log('blog:' + blog)

    const handleLike = () => {
        //const blog = blog?.blogs[0].id
        addLike(blog._id)
        .then(() => {
            setLikes(likes+1)
        })
        //fetch('http://localhost:8080/getPosts', {
        //    method: 'LIKE'
        //}).then(() => {
        //    
        //})
    }

    return (
        <div className="blog-details" style ={{color: theme.palette.text.main }}>
            <Box
                position = "fixed"
                bottom = {0}
                width = "100%"
                style = {{ backgroundColor: theme.palette.secondary.main}}
                p={3}
            />
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2> {blog.post_title} </h2>
                    <Link to={`/profile/${blog.user_id}`}>
                    <p style={{color: theme.palette.subtext.main }}><em>Written by: <b>{blog.user_name}</b></em></p>
                    </Link>
                    <div>{blog.body}</div>
                    <p>{blog.song_url}</p>
                    <button onClick={handleLike}> Likes: {likes}</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogPage;