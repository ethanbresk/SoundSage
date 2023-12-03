import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';
import { createPost } from '../utilities/backend_integration.js';

/* Create page implementation. The Create component of this code
   was influenced by template guides from a tutorial by NetNinja. */


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Default');
    const [song, setSong] = useState('');
    const [likes, setLikes] = useState(0);
    /* const [comments, setComments] = useState(); */ // NOTE: How would we implement a comment being associated with its blog? Maybe a separate object set, pointers to blogs by id?
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, song };

        setIsPending(true);
        console.log('this sg'+blog)
        createPost(blog)
        .then(() => {
            console.log('NEW BLOG ADDED');
            setIsPending(false);
            // navigate.go(-1);
            navigate('/');
        })
    }

    return (
        <div className='create'>
            <Box
                position = "fixed"
                bottom = {0}
                left = {0}
                width = "100%"
                style = {{ backgroundColor: theme.palette.secondary.main}}
                p={3}
            />
            <h1 className='page_header'>Create</h1>
            <form onSubmit={handleSubmit} style={{ color: theme.palette.text.main }}>
                <label>Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Song:</label>
                <textarea 
                    required
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                ></textarea>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Posting...</button>}
                {/*<p>{ title }</p>
                <p>{body}</p>
                <p>{author}</p>*/}
            </form>
        </div>
    );
}
 
export default Create;