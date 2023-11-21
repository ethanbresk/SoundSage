import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogPage = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8080/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8080/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="blog-details">
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