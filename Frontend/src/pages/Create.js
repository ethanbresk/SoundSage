import { useState } from "react";
import { useNavigate } from 'react-router-dom';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, song, likes };

        setIsPending(true);

        fetch('http://localhost:8080/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('NEW BLOG ADDED');
            setIsPending(false);
            // navigate.go(-1);
            navigate('/');
        })
    }

    return (
        <div className='create'>
            <h1 className='page_header'>Create</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                <option value="Default">Default</option>
                <option value="Ethan">Ethan</option>
                <option value="James">Kames</option>
                <option value="Kirt">Kirt</option>
                <option value="Aaron">Aaron</option>
                <option value="Erik">Erik</option>
                </select>
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