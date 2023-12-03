import { useNavigate, useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';
import { getPost, addLike, createPost } from '../utilities/backend_integration.js';

const BlogPage = () => {
    const { id } = useParams();
    
    const [isPending, setIsPending] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [blog, setBlog] = useState(0);
    const navigate = useNavigate();
    const theme = useTheme()
    const [likes,setLikes] = useState(0);
    const [title, setTitle] = useState(' ');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Default');
    const [song, setSong] = useState(' ');
    const [children, setChildren] = useState([]);

    //console.log(id)
    useEffect(() => {
        console.log('id:' + id)
        getPost(id)
        .then((res) => {
            //console.log(res)
            setBlog(res)
            setLikes(res.num_of_likes)
            console.log(res.children.length)
            for(var i = 0; i < res.children.length; i++) {
                getPost(res.children[i])
                .then((res) => {
                    setChildren((oldChildren) => {return oldChildren.concat(res)})
                })
            }
            setIsLoading(false)
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

    const handleSubmit = (e) => {
        console.log(blog)
        e.preventDefault();
        setTitle('Replying to ' + blog.user_name)
        const parent = blog._id
        const comment = { title, body, song, parent };
        console.log('This is my comment' + comment)

        setIsPending(true);
        console.log('this too' + comment)
        createPost(comment)
        .then(() => {
            console.log('NEW COMMENT ADDED');
            setIsPending(false);
            // navigate.go(-1);
            navigate('/');
        })

    const handleChildren = () => {

    }
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
            { isLoading && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2> {blog.post_title} </h2>
                    <Link to={`/profile/${blog.user_id}`}>
                    <p style={{color: theme.palette.subtext.main }}><em>Written by: <b>{blog.user_name}</b></em></p>
                    </Link>
                    <p>{blog.post_body}</p>
                    <p>{blog.song_url}</p>
                    <button onClick={handleLike}> Likes: {likes}</button>
                </article>
            )}
            <div className='create'>
            <h1 className='page_header'>Comment</h1>
            <form onSubmit={handleSubmit} style={{ color: theme.palette.text.main }}>
                <label>Comment:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                { !isPending && <button>Add Comment</button>}
                { isPending && <button disabled>Posting...</button>}
                {/*<p>{ title }</p>
                <p>{body}</p>
                <p>{author}</p>*/}
            </form>
        {children?.length > 0 && (
            <div>
                {children?.map((child) => (
                    <>
                    <h1>{child.post_body}</h1>
                    <p>{child.user_name}</p>
                    </>
                ))}
            </div>
        )}
        </div>
        </div>
    );
}
 
export default BlogPage;